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

// Language Toggle (Header and Index Controls)
document.querySelectorAll('.lang-button').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.textContent.toLowerCase();
    let currentPath = window.location.pathname;
    console.log('Current path before check:', currentPath); // Debug log
    // Handle GitHub Pages root URL (treat '/' as '/index.html')
    if (currentPath === '/') {
      currentPath = '/index.html';
      console.log('Path set to /index.html for root URL'); // Debug log
    }
    const isEnglish = !currentPath.includes('-ro');
    console.log('Is English:', isEnglish, 'Lang pressed:', lang); // Debug log
    if ((lang === 'ro' && isEnglish) || (lang === 'en' && !isEnglish)) {
      const newPath = isEnglish ? currentPath.replace('.html', '-ro.html') : currentPath.replace('-ro.html', '.html');
      console.log('Redirecting to:', newPath); // Debug log
      window.location.href = newPath;
    } else {
      console.log('No redirect needed'); // Debug log
    }
  });
});

// Hamburger Menu (Mobile Fullscreen) - Only if hamburger exists
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  // Close menu on link click or outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}
