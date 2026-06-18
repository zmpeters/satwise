const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const contactForm = document.getElementById('contactForm');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

cookieAccept.addEventListener('click', () => {
  cookieBanner.style.display = 'none';
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you! Please email info@satwise.me to send your inquiry.');
  contactForm.reset();
});
