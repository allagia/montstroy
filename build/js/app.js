'use strict';
var hamburger = document.querySelector('.page-nav__toggle');
var menu = document.querySelector('.page-nav__list');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('page-nav__list--active');
};

hamburger.addEventListener('click', function (e) {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var itsMenu = target === menu || menu.contains(target);
  var itsHamburger = target === hamburger;
  var menuIsActive = menu.classList.contains('page-nav__list--active');

  if (!itsMenu && !itsHamburger && menuIsActive) {
    toggleMenu();
  }
});
