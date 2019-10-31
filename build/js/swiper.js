'use strict';

var tabletScreen = window.matchMedia('(max-width: 1023px)');
var phoneScreen = window.matchMedia('(max-width: 767px)');
var swiper;
var currentScreenSize = '';
var swiperNode = document.querySelector('.swiper-container');

function breakpointChecker() {
  if (tabletScreen.matches) {
    if (currentScreenSize !== 'tablet') {
      currentScreenSize = 'tablet';
      disableSwiper();
    }
    enableSwiper();
  } else if (phoneScreen.matches) {
    if (currentScreenSize !== 'phone') {
      currentScreenSize = 'phone';
      disableSwiper();
    }
    enableSwiper();
  } else {
    disableSwiper();
  }
  return;
}

function enableSwiper() {
  addSwiperClasses(swiperNode);
  swiper = new window.Swiper(swiperNode, {
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}

function disableSwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }

  removeSwiperClasses(swiperNode);
}

function removeSwiperClasses(swiperContainerNode) {
  swiperContainerNode.swiperClasses = [];

  Array.from(swiperContainerNode.classList).forEach(function (className) {
    if (className.startsWith('swiper-')) {
      swiperContainerNode.swiperClasses.push(className);
    }
  });

  swiperContainerNode.swiperClasses.forEach(function (className) {
    swiperContainerNode.classList.remove(className);
  });

  var nodes = Array.from(swiperNode.querySelectorAll('.swiper-wrapper, .swiper-slide, .swiper-pagination'));
  nodes.forEach(function (node) {
    node.swiperClasses = [];

    Array.from(node.classList).forEach(function (className) {
      if (className.startsWith('swiper-')) {
        node.swiperClasses.push(className);
      }
    });

    node.swiperClasses.forEach(function (className) {
      node.classList.remove(className);
    });

    node.classList.add('swiper-disabled');
  });
}

function addSwiperClasses(swiperContainerNode) {
  (swiperContainerNode.swiperClasses || []).forEach(function (className) {
    swiperContainerNode.classList.add(className);
  });

  swiperContainerNode.swiperClasses = [];

  var nodes = Array.from(swiperContainerNode.querySelectorAll('.swiper-disabled'));

  nodes.forEach(function (node) {
    node.classList.remove('swiper-disabled');

    (node.swiperClasses || []).forEach(function (className) {
      node.classList.add(className);
    });

    node.swiperClasses = [];
  });
}


tabletScreen.addListener(breakpointChecker);
phoneScreen.addListener(breakpointChecker);
breakpointChecker();
