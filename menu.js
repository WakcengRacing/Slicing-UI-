const menuContainer = document.querySelector('.menu-container');

let isDown = false;
let startX;
let scrollLeft;

menuContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  menuContainer.classList.add('active');
  startX = e.pageX - menuContainer.offsetLeft;
  scrollLeft = menuContainer.scrollLeft;
});

menuContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

menuContainer.addEventListener('mouseup', () => {
  isDown = false;
});

menuContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - menuContainer.offsetLeft;
  const walk = (x - startX) * 3; // Kecepatan scroll
  menuContainer.scrollLeft = scrollLeft - walk;
});

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlides(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Automatically move to the next slide every 5 seconds
setInterval(() => moveSlides(1), 1500);