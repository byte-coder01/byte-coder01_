const menuButton = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');

if (menuButton && siteNavigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    siteNavigation.classList.toggle('is-open', !isOpen);
  });

  siteNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      siteNavigation.classList.remove('is-open');
    }
  });
}
