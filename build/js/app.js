'use strict';
var pageNav = document.querySelector('.page-nav__list');
var navToggle = document.querySelector('.page-nav__toggle');

navToggle.addEventListener('click', function () {
  if (pageNav.classList.contains('page-nav__list--closed')) {
    pageNav.classList.remove('page-nav__list--closed');
    pageNav.classList.add('page-nav__list--opened');
  } else {
    pageNav.classList.add('page-nav__list--closed');
    pageNav.classList.remove('page-nav__list--opened');
  }
});
