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

var mySwiper = new Swiper('.swiper-container', {
  // slidesPerView: 3,
  // initialSlide: 2,
  centeredSlides: true,
  // grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      initialSlide: 2,
      spaceBetween: -10,
    },
    1024: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 250,
      slidesOffsetAfter: 40
      // mySwiper.destroy(false, false),
    }
  }
});
