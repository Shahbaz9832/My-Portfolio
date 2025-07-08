const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Shahbaz Ansari</h1>
        <nav className="flex gap-4 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
