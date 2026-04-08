// Navigation configuration
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// Site metadata for SEO
export const siteMetadata = {
  title: 'Lingouda Patil - Technical Support Engineer | Full Stack Developer | ERP',
  description: 'Technical Support and Implementation Engineer with 1+ years in ERP deployment, API integrations, and full-stack development. Expert in SixOrbit ERP, MERN stack, and third-party system integration.',
  keywords: 'ERP implementation, technical support, MERN stack, API integration, full stack developer, SixOrbit ERP, WhatsApp API, biometric integration',
  name: 'Lingouda Patil',
  url: 'https://lingouda-portfolio.com',
  socialProfiles: {
    linkedin: 'https://linkedin.com/in/lingouda-patil',
    github: 'https://github.com/lingouda',
  },
};

// Contact configuration
export const contactInfo = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'lingoudap@gmail.com',
  phone: '+91-7026589882',
  linkedin: siteMetadata.socialProfiles.linkedin,
  github: siteMetadata.socialProfiles.github,
};

// EmailJS configuration
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder',
  userId: import.meta.env.VITE_EMAILJS_USER_ID || 'user_placeholder',
};
