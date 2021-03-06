'use strict';
(function () {

  var feedbackForm = document.querySelector('.feedback form');
  var formCheckbox = document.querySelector('.form input[id="form-user"]');
  var textAlert = document.querySelector('.form__wrapper-column--checkbox p');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (evt) {
      if (!formCheckbox.checked) {
        evt.preventDefault();
        textAlert.classList.add('show-text');

      } else {
        textAlert.classList.remove('show-text');
      }
    });
  }

  var inputFormTel = document.querySelector('input[id="form-phone"]');
  var inputModalTel = document.querySelector('input[id="modal-phone"]');
  var createMask = window.IMask;

  if (inputFormTel) {
    createMask(inputFormTel, {
      mask: '+{7} (000) 000-00-00'
    });
  }

  if (inputModalTel) {
    createMask(inputModalTel, {
      mask: '+{7} (000) 000-00-00'
    });
  }
})();
