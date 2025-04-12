(function () {
  const depth = window.location.pathname.split('/').length - 2;
  const basePath = '../'.repeat(depth);

  function loadHTML(id, fileName) {
    const path = basePath + fileName;
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error(`${fileName} not found`);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error(`Error loading ${fileName}:`, error);
        document.getElementById(id).innerHTML = `
          <div style="color: red; text-align: center; padding: 1rem;">
            ${fileName} not found (404)
          </div>`;
      });
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
  });
})();

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
