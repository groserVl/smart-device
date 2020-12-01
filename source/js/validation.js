'use strict';
(function () {

  var inputTel = document.querySelector('input[type="tel"]');
  var createMask = window.IMask;

  if (inputTel) {
    createMask(inputTel, {
      mask: '+{7} (000) 000-00-00'
    });
  }

})();
