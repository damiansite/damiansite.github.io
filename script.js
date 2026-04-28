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
  button.addEventListener('click', (e) => {
    console.log('Language button clicked:', e.target.textContent);
    const lang = button.textContent.toLowerCase();
    let currentPath = window.location.pathname;
    console.log('Current pathname:', currentPath);
    
    if (currentPath === '/' || currentPath === '') {
      currentPath = '/index.html';
      console.log('Path adjusted to /index.html for root URL');
    }
    
    const isEnglish = !currentPath.includes('-ro');
    console.log('Is English:', isEnglish, 'Lang pressed:', lang);
    
    if ((lang === 'ro' && isEnglish) || (lang === 'en' && !isEnglish)) {
      const newPath = isEnglish ? currentPath.replace('.html', '-ro.html') : currentPath.replace('-ro.html', '.html');
      console.log('Attempting redirect to:', newPath);
      try {
        window.location.href = newPath;
      } catch (error) {
        console.error('Redirect failed:', error);
        window.location.assign(newPath);
      }
    } else {
      console.log('No redirect needed');
    }
  });
});

// Detect mobile for hover disabling
const isMobile = window.innerWidth <= 1024 || 
                 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
document.body.classList.toggle('is-mobile', isMobile);

// Language box tap feedback (mobile only)
document.querySelectorAll('.language-box').forEach(box => {
  box.addEventListener('click', function() {
    if (isMobile) {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    }
  });
});

// Button tap feedback for all pages
document.querySelectorAll('.cta-button, .index-button, .button').forEach(button => {
  button.addEventListener('click', function(e) {
    if (isMobile) {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  const newIsMobile = window.innerWidth <= 1024 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  document.body.classList.toggle('is-mobile', newIsMobile);
});

window.onload = function () {
  if (!localStorage.getItem("copyrightAccepted")) {
    document.getElementById("copyright-popup").style.display = "flex";
  }
};

  function closePopup() {
    localStorage.setItem("copyrightAccepted", "true");
    document.getElementById("copyright-popup").style.display = "none";
  }
