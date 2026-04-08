export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <p className="text-blue-400 font-semibold">
        <span className="inline-block h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 mr-2 align-middle rounded"></span>
        {subtitle}
      </p>
    </div>
  );
}
