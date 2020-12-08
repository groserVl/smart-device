'use strict';
(function () {

  var modal = document.querySelector('.modal');
  var buttonSubmit = document.querySelector('.modal button[type="submit"]');
  var modalTitle = document.querySelector('.modal h2');
  var modalText = document.querySelector('.modal p');
  var buttonOpenModal = document.querySelector('.header__button');
  var buttonCloseModal = document.querySelector('.form__button-close');
  var feedbackForm = document.querySelector('.feedback__form');
  var modalOverlay = document.querySelector('.modal-overlay');
  var nameInput = document.querySelector('input[type="text"]');
  var phoneInput = document.querySelector('input[type="tel"]');
  var textarea = document.querySelector('textarea');

  if (modal) {
    buttonSubmit.textContent = 'Отправить';
    modalTitle.textContent = 'Закажите звонок';
    modalText.textContent = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
  }

  buttonOpenModal.addEventListener('click', onButtonOpenModal);

  function removeModal() {
    feedbackForm.classList.remove('modal');
    buttonCloseModal.classList.remove('form__button-close--show');
    modalOverlay.classList.remove('modal-overlay--show');
  }

  function onButtonOpenModal(evt) {
    evt.preventDefault();
    feedbackForm.classList.add('modal');
    buttonCloseModal.classList.add('form__button-close--show');
    modalOverlay.classList.add('modal-overlay--show');

    document.body.style.overflow = 'hidden';

    nameInput.focus();

    nameInput.addEventListener('input', function () {
      localStorage.setItem('name', nameInput.value);
    });
    nameInput.value = localStorage.getItem('name');

    phoneInput.addEventListener('input', function () {
      localStorage.setItem('phone', phoneInput.value);
    });
    phoneInput.value = localStorage.getItem('phone');

    textarea.addEventListener('input', function () {
      localStorage.setItem('text', textarea.value);
    });
    textarea.value = localStorage.getItem('text');

    buttonCloseModal.addEventListener('click', onButtonCloseModal);
    modalOverlay.addEventListener('click', onModalOverlayCloseModal);
    window.addEventListener('keydown', onEscapeCloseModal);
  }

  function onButtonCloseModal() {
    removeModal();
  }

  function onModalOverlayCloseModal(evt) {
    if (evt.target === modalOverlay) {
      removeModal();
    }
  }

  function onEscapeCloseModal(evt) {
    if (evt.code === 'Escape' && feedbackForm.classList.contains('modal')) {
      removeModal();
    }
  }

})();
