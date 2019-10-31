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

var mySwiper = document.querySelector('.swiper-container').swiper;

// var slide = document.querySelector('.advanatges__item');

// slide.style.removeProperty('width');

// 'use strict';

// var breakpoint = window.matchMedia('(max-width: 767px)');
// var swiper;
// var swiperNode = document.querySelector('.swiper-container-top');

// function breakpointChecker() {
//   if (breakpoint.matches) {
//     enableSwiper();

//     return;
//   }

//   disableSwiper();
// }

// function enableSwiper() {
//   addSwiperClasses(swiperNode);
//   swiper = new window.Swiper(swiperNode, {
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//     initialSlide: 1,
//     centeredSlides: true,
//     grabCursor: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     }
//   });
// }

// function disableSwiper() {
//   if (swiper) {
//     swiper.destroy(true, true);
//     swiper = null;
//   }

//   removeSwiperClasses(swiperNode);
// }

// function removeSwiperClasses(swiperContainerNode) {
//   swiperContainerNode.swiperClasses = [];

//   Array.from(swiperContainerNode.classList).forEach(function (className) {
//     if (className.startsWith('swiper-')) {
//       swiperContainerNode.swiperClasses.push(className);
//     }
//   });

//   swiperContainerNode.swiperClasses.forEach(function (className) {
//     swiperContainerNode.classList.remove(className);
//   });

//   var nodes = Array.from(swiperNode.querySelectorAll('.swiper-wrapper, .swiper-slide, .swiper-pagination'));
//   nodes.forEach(function (node) {
//     node.swiperClasses = [];

//     Array.from(node.classList).forEach(function (className) {
//       if (className.startsWith('swiper-')) {
//         node.swiperClasses.push(className);
//       }
//     });

//     node.swiperClasses.forEach(function (className) {
//       node.classList.remove(className);
//     });

//     node.classList.add('swiper-disabled');
//   });
// }

// function addSwiperClasses(swiperContainerNode) {
//   (swiperContainerNode.swiperClasses || []).forEach(function (className) {
//     swiperContainerNode.classList.add(className);
//   });

//   swiperContainerNode.swiperClasses = [];

//   var nodes = Array.from(swiperContainerNode.querySelectorAll('.swiper-disabled'));

//   nodes.forEach(function (node) {
//     node.classList.remove('swiper-disabled');

//     (node.swiperClasses || []).forEach(function (className) {
//       node.classList.add(className);
//     });

//     node.swiperClasses = [];
//   });
// }


// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
