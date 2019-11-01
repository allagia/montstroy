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
  var its_menu = target === menu || menu.contains(target);
  var its_hamburger = target === hamburger;
  var menu_is_active = menu.classList.contains('page-nav__list--active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});
