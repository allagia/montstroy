'use strict';
// Полифил для Array.from (для IE11)
// Шаги алгоритма ECMA-262, 6-е издание, 22.1.2.1
// Ссылка: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // Свойство length метода from равно 1.
    return function from(arrayLike/* , mapFn, thisArg */) {
      // 1. Положим C равным значению this.
      var C = this;

      // 2. Положим items равным ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike === null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. Если mapfn равен undefined, положим mapping равным false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. иначе
        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Положим lenValue равным Get(items, "length").
      // 11. Положим len равным ToLength(lenValue).
      var len = toLength(items.length);

      // 13. Если IsConstructor(C) равен true, то
      // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
      //     объекта C со списком аргументов, содержащим единственный элемент len.
      // 14. a. Иначе, положим A равным ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Положим k равным 0.
      var k = 0;
      // 17. Пока k < len, будем повторять... (шаги с a по h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Положим putStatus равным Put(A, "length", len, true).
      A.length = len;
      // 20. Вернём A.
      return A;
    };
  }());
}

var tabletScreen = window.matchMedia('(max-width: 1023px)');
var phoneScreen = window.matchMedia('(max-width: 767px)');
var swiperObjServices;
var swiperObjPartners;
var currentScreenSize = '';
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
      disableSwiper([swiperObjServices, swiperObjPartners]);
    }
    swiperObjServices = enableSwiper(swiperNodeServices, swiperParamsDefault);
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsDefault);
  } else if (phoneScreen.matches) {
    if (currentScreenSize !== 'phone') {
      currentScreenSize = 'phone';
      disableSwiper([swiperObjServices, swiperObjPartners]);
    }
    swiperObjServices = enableSwiper(swiperNodeServices, swiperParamsDefault);
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsDefault);
  } else {
    if (currentScreenSize !== 'desktop') {
      currentScreenSize = 'desktop';
      disableSwiper([swiperObjServices, swiperObjPartners]);
    }
    swiperObjPartners = enableSwiper(swiperNodePartners, swiperParamsPartnersDesktop);
  }
  return;
}

function enableSwiper(swiperNode, swipersParams) {
  addSwiperClasses(swiperNode);
  return new window.Swiper(swiperNode, swipersParams);
}

function disableSwiper(swiperObjs) {
  swiperObjs.forEach(function (swiperObj) {
    if (swiperObj) {
      if (swiperObj.el) {
        removeSwiperClasses(swiperObj.el);
      }
      swiperObj.destroy(true, true);
    }
  });
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
