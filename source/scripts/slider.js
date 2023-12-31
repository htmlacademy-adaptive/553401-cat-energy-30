// Слайдер
const slider = document.querySelector('.slider');
const beforeSlide = document.querySelector('.slider__image--before');
const beforeImage = beforeSlide.querySelector('img');
const afterSlide = document.querySelector('.slider__image--after');
const afterImage = afterSlide.querySelector('img');
const changeBtn = document.querySelector('.slider__change-control');
const body = document.body;

let isActive = false;

const width = slider.offsetWidth;
beforeImage.style.width = `${width}px`;
afterImage.style.width = `${width}px`;

changeBtn.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  const shiftBefore = Math.max(0, Math.min(x, slider.offsetWidth));
  const shiftAfter = slider.offsetWidth - shiftBefore;
  beforeSlide.style.width = `${shiftBefore}px`;
  afterSlide.style.width = `${shiftAfter}px`;
  changeBtn.style.left = `${shiftBefore}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

changeBtn.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
