// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Language Toggle (redirects to corresponding RO/EN page)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
  const currentPath = window.location.pathname;
  const isEnglish = !currentPath.includes('-ro');
  const newPath = isEnglish ? currentPath.replace('.html', '-ro.html') : currentPath.replace('-ro.html', '.html');
  window.location.href = newPath;
});
