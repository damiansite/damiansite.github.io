// Dark Mode Toggle (Header)
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleOverlay = document.getElementById('dark-mode-toggle-overlay');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (darkModeToggle) darkModeToggle.textContent = 'L';
  if (darkModeToggleOverlay) darkModeToggleOverlay.textContent = 'L';
} else {
  if (darkModeToggle) darkModeToggle.textContent = 'D';
  if (darkModeToggleOverlay) darkModeToggleOverlay.textContent = 'D';
}

function toggleTheme() {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  if (darkModeToggle) darkModeToggle.textContent = theme === 'dark' ? 'L' : 'D';
  if (darkModeToggleOverlay) darkModeToggleOverlay.textContent = theme === 'dark' ? 'L' : 'D';
}

if (darkModeToggle) darkModeToggle.addEventListener('click', toggleTheme);
if (darkModeToggleOverlay) darkModeToggleOverlay.addEventListener('click', toggleTheme);

// Language Toggle (Header and Overlay)
function setupLangButtons(buttons) {
  buttons.forEach(button => {
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
}

setupLangButtons(document.querySelectorAll('.lang-button'));
setupLangButtons(document.querySelectorAll('.lang-button-overlay'));

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('active');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });
}
