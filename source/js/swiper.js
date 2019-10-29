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
  slidesPerView: 3,
  spaceBetween: -10,
  initialSlide: 2,
  freeMode: true,
  centeredSlides: true,
  grabCursor: true,
  // centeredSlidesBounds: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
