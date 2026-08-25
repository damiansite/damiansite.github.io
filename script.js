// ================= DARK MODE TOGGLE =================
const darkModeToggle = document.getElementById('dark-mode-toggle');

function updateDarkModeButton() {
  if (!darkModeToggle) return;
  const isDark = document.documentElement.classList.contains('dark-mode');
  const label = darkModeToggle.querySelector('span');
  if (label) label.textContent = isDark ? 'L' : 'D';
}

updateDarkModeButton();

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkModeButton();
  });

  // Moving backlight that follows the cursor while hovering
  darkModeToggle.addEventListener('mousemove', (e) => {
    const rect = darkModeToggle.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    darkModeToggle.style.setProperty('--mx', `${x}%`);
    darkModeToggle.style.setProperty('--my', `${y}%`);
  });
}

// ================= SMOOTH PAGE TRANSITIONS =================
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || link.target === '_blank') return;

  link.addEventListener('click', (e) => {
    // Only intercept same-site .html navigations
    if (href.endsWith('.html') || href === '/' ) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 280);
    }
  });
});
