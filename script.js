(function () {
  // Get base path to root depending on page depth
  const basePath = window.location.pathname
    .replace(/[^\/]+\.html$/, '')  // remove filename
    .replace(/\/+$/, '')           // remove trailing slashes
    .split('/').filter(Boolean).map(() => '..').join('/') || '.';

  function loadHTML(id, file) {
    const filePath = `${basePath}/${file}`;
    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error(`${file} not found`);
        return res.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => {
        console.error(err.message);
        document.getElementById(id).innerHTML =
          `<div style="color:red;text-align:center;">${file} not found (404)</div>`;
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
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
