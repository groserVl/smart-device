'use strict';
(function () {

  var buttonSubmit = document.querySelector('button[type="submit"]');
  var modalTitle = document.querySelector('.modal h2');
  var modalText = document.querySelector('.modal p');

  buttonSubmit.textContent = 'Отправить';
  modalTitle.textContent = 'Закажите звонок';
  modalText.textContent = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';

})();
