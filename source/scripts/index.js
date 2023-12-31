const menu = document.querySelector('.page-header__menu');
const menuBtn = menu.querySelector('.page-header__toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
});
