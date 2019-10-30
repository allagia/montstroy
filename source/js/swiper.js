'use strict';

// var swiper = new Swiper ('.swiper-container', {
//   slidesPerView: 3,
//   // spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: -10,
//   // freeMode: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var swiper = new Swiper('.swiper-container', {
  // slidesPerView: 3,
  // spaceBetween: -10,
  initialSlide: 1,
  freeMode: true,
  centeredSlides: true,
  grabCursor: true,
  // centeredSlidesBounds: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 194
    }
  }
});
