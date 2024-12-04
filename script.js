document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateButtonText(savedTheme);
    }

    themeToggle.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark");
        const theme = isDarkMode ? "dark" : "light";

        // Save to localStorage
        localStorage.setItem("theme", theme);
        updateButtonText(theme);
    });

    function updateButtonText(theme) {
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    }
});
