'use strict';
(function () {

  var NUMBER_OF_OBJECTS = 4;


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
  var render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > NUMBER_OF_OBJECTS ? NUMBER_OF_OBJECTS : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
    window.setup.userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };
  window.coatColor = 'rgb(101, 137, 164)';
  window.eyesColor = 'black';
  var wizards = [];
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    return rank;
  };
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  window.updateWizards = function () {
    render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
  window.colorize.onEyesChange = window.debounce(function (color) {
    window.eyesColor = color;
    window.updateWizards();
  });

  window.colorize.onCoatChange = window.debounce(function (color) {
    window.coatColor = color;
    window.updateWizards();
  });
  var successHandler = function (data) {
    wizards = data;
    window.updateWizards();
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
