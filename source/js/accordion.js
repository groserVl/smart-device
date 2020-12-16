'use strict';
(function () {

  var accordions = document.querySelectorAll('.footer__accordions');

  if (accordions) {

    accordions.forEach(function (item) {
      item.classList.remove('footer__accordions--nojs');

      item.addEventListener('click', function () {
        if (item.classList.contains('footer__accordions--show')) {
          item.classList.remove('footer__accordions--show');
        } else {
          for (var i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('footer__accordions--show');
          }
          item.classList.add('footer__accordions--show');
        }
      });
    });
  }

})();
