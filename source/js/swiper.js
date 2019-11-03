'use strict';

var tabletScreen = window.matchMedia('(max-width: 1023px)');
var phoneScreen = window.matchMedia('(max-width: 767px)');
var swiperObjServices;
var swiperObjPartners;
var currentScreenSize = 'desktop';
var swiperNodeServices = document.querySelector('.swiper-container-services');
var swiperNodePartners = document.querySelector('.swiper-container-partners');
var swiperParamsDefault = {
  slidesPerView: 'auto',
  initialSlide: 1,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
};
var swiperParamsPartnersDesktop = {
  slidesPerView: 'auto',
  initialSlide: 1,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

function breakpointChecker() {
  if (tabletScreen.matches) {
    if (currentScreenSize !== 'tablet') {
      currentScreenSize = 'tablet';
      if (swiperObjServices) {
        disableSwiper(swiperObjServices);
      }
      if (swiperObjPartners) {
        disableSwiper(swiperObjPartners);
      }
    }
    swiperObjServices = enableSwiper(swiperNodeServices, swiperParamsDefault);
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsDefault);
  } else if (phoneScreen.matches) {
    if (currentScreenSize !== 'phone') {
      currentScreenSize = 'phone';
      if (swiperObjServices) {
        disableSwiper(swiperObjServices);
      }
      if (swiperObjPartners) {
        disableSwiper(swiperObjPartners);
      }
    }
    swiperObjServices = enableSwiper(swiperNodeServices, swiperParamsDefault);
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsDefault);
  } else {
    if (currentScreenSize !== 'desktop') {
      currentScreenSize = 'desktop';
      if (swiperObjServices) {
        disableSwiper(swiperObjServices);
      }
      if (swiperObjPartners) {
        disableSwiper(swiperObjPartners);
      }
    }
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsPartnersDesktop);
  }
  return;
}

function enableSwiper(swiperNode, swipersParams) {
  addSwiperClasses(swiperNode);
  return new window.Swiper(swiperNode, swipersParams);
}

function disableSwiper(swiperObj) {
  removeSwiperClasses(swiperObj.el);
  swiperObj.destroy(true, true);
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

  var nodes = Array.from(swiperContainerNode.querySelectorAll('.swiper-wrapper, .swiper-slide, .swiper-pagination'));
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
