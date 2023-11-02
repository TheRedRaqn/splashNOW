const toggleButton = document.getElementById('darkModeToggle');

// Function to set the theme based on the user's choice
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Sun icon for dark mode
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Moon icon for light mode
    }
}

// Check for browser's preferred theme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if (userPrefersDark) {
    setTheme('dark');
} else if (userPrefersLight) {
    setTheme('light');
}

// Toggle the theme on button click
toggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});
