'use strict';
(function () {
  var WIZARD_EYES = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COATES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.colorize = function (element, arr) {
    element.addEventListener('click', function () {
      var color = window.getRandomNumber(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
  var userDialogElement = document.querySelector('.setup');
  var fireball = userDialogElement.querySelector('.setup-fireball-wrap');
  window.colorize(fireball, WIZARD_FIREBALLS);
  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', window.debounce(function () {
    var newColor = window.getRandomNumber(WIZARD_COATES);
    wizardCoatElement.style.fill = newColor;
    window.coatColor = newColor;
    window.updateWizards();
  }));

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', window.debounce(function () {
    var newColor = window.getRandomNumber(WIZARD_EYES);
    wizardEyesElement.style.fill = newColor;
    window.eyesColor = newColor;
    window.debounce(window.updateWizards());
  }));
})();
