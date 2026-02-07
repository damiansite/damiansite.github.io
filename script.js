// Dark Mode Toggle (Header)
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'L';
} else {
  darkModeToggle.textContent = 'D';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  darkModeToggle.textContent = theme === 'dark' ? 'L' : 'D';
});

// Language Toggle (Header)
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

// Hamburger Menu (Simple Slide-Down)
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Close menu on link click or outside click
document.addEventListener('click', (e) => {
  if (!navUl.contains(e.target) && !hamburger.contains(e.target)) {
    navUl.classList.remove('active');
  }
});

navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
  });
});
