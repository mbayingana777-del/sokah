const hero = document.querySelector('.hero');
const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 4000);
