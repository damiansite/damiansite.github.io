const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

applyTheme(localStorage.getItem('theme') || 'light');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
}
