'use strict';

var pageHeader = document.querySelector('.page-header')
var mainNav = document.querySelector('.main-nav');
var siteList = mainNav.querySelector('.site-list');
var mobileNavToggle = pageHeader.querySelector('.main-nav__toggle');

var onMobileNavToggleClick = function (evt) {
  evt.preventDefault();
  siteList.classList.toggle('hidden');
}

mobileNavToggle.addEventListener('click', onMobileNavToggleClick);