'use strict';

var pageHeader = document.querySelector('.page-header');
var pageHeaderModifier = pageHeader.querySelector('.page-header__header-logo-wrapper');
var mainNav = document.querySelector('.main-nav');
var siteList = mainNav.querySelector('.site-list');
var mobileNavToggle = pageHeader.querySelector('.main-nav__toggle');

var onMobileNavToggleClick = function (evt) {
  evt.preventDefault();
  siteList.classList.toggle('hidden');
  pageHeaderModifier.classList.toggle('mobile-nav-opened');
}

mobileNavToggle.addEventListener('click', onMobileNavToggleClick);
