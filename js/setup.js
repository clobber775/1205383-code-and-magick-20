'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES = ['black', 'red', 'yellow', 'green'];
var WIZARD_COATES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIRST_OBJECT = 0;
var NUMBER_OF_OBJECTS = 4;

var getRandomNumberInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createObject = function (arr) {
  for (var i = FIRST_OBJECT; i < NUMBER_OF_OBJECTS; i++) {
    arr[i] = {
      name: WIZARD_NAMES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_NAMES.length - 1)],
      surname: WIZARD_SURNAMES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_SURNAMES.length - 1)],
      eyesColor: WIZARD_EYES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_EYES.length - 1)],
      coatColor: WIZARD_COATES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_COATES.length - 1)]
    };
  }
  return arr;
};

var userDialogElement = document.querySelector('.setup');
userDialogElement.classList.remove('hidden');

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
