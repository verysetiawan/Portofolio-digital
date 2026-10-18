export const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-border-dark px-6 py-12 text-center text-text-secondary">
      <p className="font-bold text-text-primary-dark mb-2">ALBEETECH</p>
      <p className="text-sm mb-6">Build. Learn. Share. Inspire.</p>
      <div className="text-xs">
        &copy; {new Date().getFullYear()} Very Setiawan. All rights reserved.
      </div>
    </footer>
  );
};
