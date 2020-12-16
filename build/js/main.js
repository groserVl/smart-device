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

'use strict';

(function () {
  var modalForm = document.querySelector('.modal form');
  var modal = document.querySelector('.modal');
  var modalOverlay = document.querySelector('.modal-overlay');
  var buttonOpenModal = document.querySelector('.header__button');
  var buttonCloseModal = document.querySelector('.modal button[type="button"]');
  var modalCheckbox = document.querySelector('.modal input[id="modal-user"]');
  var name = document.querySelector('#modal-name');
  var phone = document.querySelector('#modal-phone');
  var textarea = document.querySelector('#modal-text');

  if (buttonOpenModal) {
    buttonOpenModal.addEventListener('click', onButtonOpenModalClick);
  }

  function removeModal() {
    modal.classList.remove('modal--show');
    modalOverlay.classList.remove('modal-overlay--show');
    document.body.style.overflow = 'visible';
  }

  function closeEventListeners() {
    buttonCloseModal.removeEventListener('click', onButtonCloseModalClick);
    modalOverlay.removeEventListener('click', onModalOverlayClick);
    window.removeEventListener('keydown', onEscapeClick);
  }

  function onButtonOpenModalClick(evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');
    modalOverlay.classList.add('modal-overlay--show');
    document.body.style.overflow = 'hidden';
    name.focus();
    name.value = localStorage.getItem('name');
    phone.value = localStorage.getItem('phone');
    textarea.value = localStorage.getItem('text');
    buttonCloseModal.addEventListener('click', onButtonCloseModalClick);
    modalOverlay.addEventListener('click', onModalOverlayClick);
    window.addEventListener('keydown', onEscapeClick);
  }

  function onButtonCloseModalClick() {
    removeModal();
    closeEventListeners();
  }

  function onModalOverlayClick(evt) {
    if (evt.target === modalOverlay) {
      removeModal();
      closeEventListeners();
    }
  }

  function onEscapeClick(evt) {
    if (evt.keyCode === 27 && modal.classList.contains('modal')) {
      removeModal();
      closeEventListeners();
    }
  }

  modalForm.addEventListener('submit', function (evt) {
    if (!modalCheckbox.checked) {
      evt.preventDefault();
    } else {
      localStorage.setItem('name', name.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('text', textarea.value);
    }
  });
})();

'use strict';

(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');

  if (anchors) {
    anchors.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        var id = item.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
})();

'use strict';

(function () {
  var feedbackForm = document.querySelector('.feedback form');
  var formCheckbox = document.querySelector('.form input[id="form-user"]');
  feedbackForm.addEventListener('submit', function (evt) {
    if (!formCheckbox.checked) {
      evt.preventDefault();
    }
  });
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