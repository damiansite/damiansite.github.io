const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const body = document.body;

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
    icon.src = 'night-mode.png'; // stays same symbol
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    icon.src = 'night-mode.png'; // same icon, different meaning
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme
setTheme(localStorage.getItem('theme') || 'light');

// Toggle on click
toggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});
