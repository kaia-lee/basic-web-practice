'use strict';

// When scrolling down, change the header background color
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Make home section transparent when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  const opacity = 1 - window.scrollY / homeHeight;
  home.style.opacity = opacity < 0 ? 0 : opacity;
});

// Show arrow when scrolling down
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight) {
    arrow.style.opacity = '1';
  } else {
    arrow.style.opacity = '0';
  }
});

// Navbar toggle for mobile
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
