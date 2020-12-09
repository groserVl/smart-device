'use strict';
(function () {

  var buttonAccordion = document.querySelectorAll('.footer__button-accordion');
  var buttonContacts = document.querySelector('.footer__button-contacts');
  var buttonNavigation = document.querySelector('.footer__button-navigation');
  var siteNnavigation = document.querySelector('.footer__site-navigation');
  var officeContacts = document.querySelector('.footer__office-contacts');

  if (buttonAccordion) {
    buttonAccordion.forEach(function (item) {
      item.addEventListener('click', function (evt) {

        if (evt.target === buttonNavigation) {
          if (siteNnavigation.classList.contains('footer__list-show')) {
            siteNnavigation.classList.add('footer__list-hidden');
            siteNnavigation.classList.remove('footer__list-show');
            evt.target.classList.remove('footer__button-accordion--show');
          } else {
            siteNnavigation.classList.remove('footer__list-hidden');
            siteNnavigation.classList.add('footer__list-show');
            evt.target.classList.add('footer__button-accordion--show');
          }
          if (officeContacts.classList.contains('footer__list-show')) {
            officeContacts.classList.add('footer__list-hidden');
            officeContacts.classList.remove('footer__list-show');
            buttonContacts.classList.remove('footer__button-accordion--show');
          }
        }

        if (evt.target === buttonContacts) {
          if (officeContacts.classList.contains('footer__list-show')) {
            officeContacts.classList.add('footer__list-hidden');
            officeContacts.classList.remove('footer__list-show');
            evt.target.classList.remove('footer__button-accordion--show');
          } else {
            officeContacts.classList.remove('footer__list-hidden');
            officeContacts.classList.add('footer__list-show');
            evt.target.classList.add('footer__button-accordion--show');
          }
          if (siteNnavigation.classList.contains('footer__list-show')) {
            siteNnavigation.classList.add('footer__list-hidden');
            siteNnavigation.classList.remove('footer__list-show');
            buttonNavigation.classList.remove('footer__button-accordion--show');
          }
        }
      });
    });
  }
})();
