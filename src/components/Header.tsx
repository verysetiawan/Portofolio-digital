export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg-dark border-b border-border-dark px-6 py-4 flex items-center justify-between gap-8">
      <a href="/" className="text-lg font-bold text-text-primary-dark whitespace-nowrap shrink-0">
        ALBEETECH
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
        {['Beranda', 'Portofolio', 'Blog', 'Video', 'Tentang', 'Kontak'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
            {link}
          </a>
        ))}
      </nav>
      <button className="px-4 py-2 text-xs font-medium text-text-primary-light bg-accent rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap shrink-0">
        LMS AlbeeTech
      </button>
    </header>
  );
};
