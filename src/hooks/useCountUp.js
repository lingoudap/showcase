import { useState, useRef, useEffect } from 'react';

export default function useCountUp(target = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          if (prefersReducedMotion) {
            setCount(target);
            observer.disconnect();
            return;
          }

          const duration = 1200; // 1.2s in ms
          const startTime = performance.now();

          const easeOut = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            const currentValue = Math.floor(target * eased);

            setCount(currentValue);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              setCount(target);
              observer.disconnect();
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [target]);

  return { ref, count };
}
