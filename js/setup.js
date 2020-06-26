
'use strict';
(function () {
  var WINDOW_TOP_POS = 80;
  var WINDOW_LEFT_POS = 50;
  var setupOpenElement = document.querySelector('.setup-open');
  var setupElement = document.querySelector('.setup');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var nameInputElement = setupElement.querySelector('.setup-user-name');


  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    window.userDialogElement.style.top = WINDOW_TOP_POS + 'px';
    window.userDialogElement.style.left = WINDOW_LEFT_POS + '%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  nameInputElement.addEventListener('focus', function () {
    nameInputElement.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        document.removeEventListener('keydown', onPopupEscPress);
      }
    });
  }, true);
  var userDialogElement = document.querySelector('.setup');
  var formElement = document.querySelector('.setup-wizard-form');
  formElement.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(formElement), function () {
      userDialogElement.classList.add('hidden');
    });
    evt.preventDefault();
  });
  window.setup = {
    userDialogElement: userDialogElement
  };

})();

