'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getRandomNumberInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[0],
    surname: WIZARD_SURNAMES[0],
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'black'
  },
  {
    name: WIZARD_NAMES[1],
    surname: WIZARD_SURNAMES[1],
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'red'
  },
  {
    name: WIZARD_NAMES[2],
    surname: WIZARD_SURNAMES[2],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'blue'
  },
  {
    name: WIZARD_NAMES[3],
    surname: WIZARD_SURNAMES[3],
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: 'yellow'
  },
  {
    name: WIZARD_NAMES[4],
    surname: WIZARD_SURNAMES[4],
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'green'
  },
  {
    name: WIZARD_NAMES[5],
    surname: WIZARD_SURNAMES[5],
    coatColor: 'rgb(0, 0, 0)'
  },
  {
    name: WIZARD_NAMES[6],
    surname: WIZARD_SURNAMES[6],
  },
  {
    name: WIZARD_NAMES[7],
    surname: WIZARD_SURNAMES[7],
  },
];


var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[getRandomNumberInRange(0, 7)].name + ' ' + wizards[getRandomNumberInRange(0, 7)].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[getRandomNumberInRange(0, 5)].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[getRandomNumberInRange(0, 4)].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


