'use strict';
(function () {
  var WIZARD_EYES = ['black', 'red', 'yellow', 'green', 'blue'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COATES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WINDOW_TOP_POS = 80;
  var WINDOW_LEFT_POS = 50;
  var setupOpenElement = document.querySelector('.setup-open');
  var setupElement = document.querySelector('.setup');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var nameInputElement = setupElement.querySelector('.setup-user-name');

  window.WIZARD_EYES = WIZARD_EYES;
  window.WIZARD_COATES = WIZARD_COATES;
  window.WIZARD_FIREBALLS = WIZARD_FIREBALLS;
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
    window.setupDialogElement.style.top = WINDOW_TOP_POS + 'px';
    window.setupDialogElement.style.left = WINDOW_LEFT_POS + '%';
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

  var setup = document.querySelector('.setup');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  window.colorize(wizardCoat, WIZARD_COATES);
  window.colorize(fireball, WIZARD_FIREBALLS);
  window.colorize(wizardEyes, WIZARD_EYES);

})();
