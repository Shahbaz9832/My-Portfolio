import { NAV_LINKS } from "../constants/links";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 transition"
        >
          Shahbaz Ansari
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="rounded-full border border-gray-300 dark:border-slate-600 px-4 py-2 text-sm font-medium bg-white dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
