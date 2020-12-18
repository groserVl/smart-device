'use strict';
(function () {

  var modalForm = document.querySelector('.modal form');
  var modal = document.querySelector('.modal');
  var modalOverlay = document.querySelector('.modal-overlay');
  var buttonOpenModal = document.querySelector('.header__button');
  var buttonCloseModal = document.querySelector('.modal button[type="button"]');
  var modalCheckbox = document.querySelector('.modal input[id="modal-user"]');
  var textAlert = document.querySelector('.modal__checkbox');

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

    try {
      name.value = localStorage.getItem('name');
      phone.value = localStorage.getItem('phone');
      textarea.value = localStorage.getItem('text');

    } catch (err) {
      localStorage.clear();
    }

    // name.value = localStorage.getItem('name');
    // phone.value = localStorage.getItem('phone');
    // textarea.value = localStorage.getItem('text');

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
      textAlert.classList.add('modal__checkbox--show-text');
    } else {
      textAlert.classList.remove('modal__checkbox--show-text');

      localStorage.setItem('name', name.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('text', textarea.value);
    }
  });

})();
