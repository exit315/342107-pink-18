'use strict';

var pageHeader = document.querySelector('.page-header');
var pageHeaderModifier = pageHeader.querySelector('.page-header__header-logo-wrapper');
var mobileNavToggle = pageHeader.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');
var siteList = mainNav.querySelector('.site-list');

mainNav.classList.remove('main-nav--nojs');

var onMobileNavToggleClick = function (evt) {
  evt.preventDefault();
  siteList.classList.toggle('hidden');
  pageHeaderModifier.classList.toggle('mobile-nav-opened');

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
}

mobileNavToggle.addEventListener('click', onMobileNavToggleClick);
