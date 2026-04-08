function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-8 bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-3">
          <span className="font-semibold text-blue-400">Lingouda</span> — Full Stack Developer
        </p>
        <p className="text-sm">
          © {currentYear} Lingouda. All rights reserved. | Built with React & Tailwind CSS
        </p>
        <div className="mt-4 flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-blue-400 transition">Privacy</a>
          <span className="text-gray-700">•</span>
          <a href="#" className="hover:text-blue-400 transition">Terms</a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;