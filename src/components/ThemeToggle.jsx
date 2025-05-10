export default function ThemeToggle({ darkMode, setDarkMode }) {
  const toggleMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;
    if (!darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-500 text-gray-800 dark:text-white px-4 py-2 rounded shadow"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "☀️"  : "🌙 "}
    </button>
  );
}

