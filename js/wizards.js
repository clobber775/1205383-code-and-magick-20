'use strict';
(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var FIRST_OBJECT = 0;
  var NUMBER_OF_OBJECTS = 4;

  var createObject = function (arr) {
    for (var i = FIRST_OBJECT; i < NUMBER_OF_OBJECTS; i++) {
      arr[i] = {
        name: WIZARD_NAMES[window.getRandomNumberInRange(FIRST_OBJECT, WIZARD_NAMES.length - 1)],
        surname: WIZARD_SURNAMES[window.getRandomNumberInRange(FIRST_OBJECT, WIZARD_SURNAMES.length - 1)],
        eyesColor: window.WIZARD_EYES[window.getRandomNumberInRange(FIRST_OBJECT, window.WIZARD_EYES.length - 1)],
        coatColor: window.WIZARD_COATES[window.getRandomNumberInRange(FIRST_OBJECT, window.WIZARD_COATES.length - 1)]
      };
    }
    return arr;
  };

  var userDialogElement = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = createObject([]);

  var renderWizard = function (obj) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = obj[i].name + ' ' + obj[i].surname;
    wizardElement.querySelector('.wizard-coat').style.fill = obj[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = obj[i].eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = FIRST_OBJECT; i < NUMBER_OF_OBJECTS; i++) {
    fragment.appendChild(renderWizard(wizards));
  }
  similarListElement.appendChild(fragment);

  userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
})();
