const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');
const navigationLinks = document.querySelectorAll('#main-navigation a');

function closeMenu() {
  if (!menuToggle || !mainNavigation) return;

  menuToggle.setAttribute('aria-expanded', 'false');
  mainNavigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

if (menuToggle && mainNavigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNavigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('click', (event) => {
    if (!mainNavigation.classList.contains('is-open')) return;
    if (mainNavigation.contains(event.target) || menuToggle.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}
