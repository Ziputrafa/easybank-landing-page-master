const hamburgerBtn = document.getElementById('hamburger-btn');
const headerNav = document.getElementById('header-nav');
const header = document.getElementsByTagName('header');

hamburgerBtn.addEventListener('click', function () {
  if (hamburgerBtn.getAttribute('src') === './images/icon-hamburger.svg') {
    hamburgerBtn.setAttribute('src', './images/icon-close.svg');
    hamburgerBtn.style.width = '1.5rem';
    headerNav.style.transform = 'translateY(0)';
    headerNav.style.zIndex = '1';
  } else {
    hamburgerBtn.setAttribute('src', './images/icon-hamburger.svg');
    hamburgerBtn.style.width = '2.5rem';
    headerNav.style.transform = 'translateY(-1000px)';
  }
});
