function getBasePath() {
  const depth = window.location.pathname.split('/').length - 2;
  return '../'.repeat(depth);
}

const basePath = getBasePath();

fetch(`${basePath}header.html`)
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById('header-placeholder');
    if (header) header.innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

fetch(`${basePath}footer.html`)
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById('footer-placeholder');
    if (footer) footer.innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('theme-icon').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}
