const menu = document.querySelector('.page-header__menu');
const menuBtn = menu.querySelector('.page-header__toggle');
const map = document.querySelector('.contacts__map');

menu.classList.remove('page-header__menu--no-js');
map.classList.remove('contacts__map--no-js');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
});
