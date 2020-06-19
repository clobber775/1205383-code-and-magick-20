'use strict';
(function () {
  var NUMBER_OF_OBJECTS = 4;
  var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  window.userDialogElement = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var renderWizard = function (obj) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = obj.name;
    wizardElement.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return wizardElement;
  };


  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    shuffleArray(wizards);
    for (var i = 0; i < NUMBER_OF_OBJECTS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.setup.userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorCode) {
    var errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');


    errorMessage.textContent = errorCode;
    document.body.insertAdjacentElement('afterbegin', errorMessage);
  };
  window.backend.load(successHandler, errorHandler);
  window.setup.userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
})();
