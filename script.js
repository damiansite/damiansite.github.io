// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'L'; // Show L in dark mode
} else {
  darkModeToggle.textContent = 'D'; // Show D in light mode
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  darkModeToggle.textContent = theme === 'dark' ? 'L' : 'D';
});

// Language Toggle (redirects to corresponding RO/EN page)
document.querySelectorAll('.lang-button').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.textContent.toLowerCase();
    const currentPath = window.location.pathname;
    const isEnglish = !currentPath.includes('-ro');
    if ((lang === 'ro' && isEnglish) || (lang === 'en' && !isEnglish)) {
      const newPath = isEnglish ? currentPath.replace('.html', '-ro.html') : currentPath.replace('-ro.html', '.html');
      window.location.href = newPath;
    }
  });
});
