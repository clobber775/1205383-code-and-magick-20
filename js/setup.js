'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_EYES = ['black', 'red', 'yellow', 'green', 'blue'];
var WIZARD_COATES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

// userDialogElement.classList.remove('hidden');

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

var coatColorElement = document.querySelector('.setup-wizard .wizard-coat');

var coatColorInputElement = document.querySelector('.setup-wizard-appearance input[name=coat-color]');

coatColorElement.addEventListener('click', function () {
  coatColorElement.setAttribute('style', 'fill: ' + WIZARD_COATES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_COATES.length - 1)]);
  coatColorInputElement.value = coatColorElement.getAttribute('style');
});

var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');

var wizardEyesInputElement = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');

wizardEyesElement.addEventListener('click', function () {
  wizardEyesElement.setAttribute('style', 'fill: ' + WIZARD_EYES[getRandomNumberInRange(FIRST_OBJECT, WIZARD_EYES.length - 1)]);
  wizardEyesInputElement.value = wizardEyesElement.getAttribute('style');
});

var fireballWrapElement = document.querySelector('.setup-fireball-wrap');

var fireballInputElement = document.querySelector('.setup-fireball-wrap input');

fireballWrapElement.addEventListener('click', function () {
  fireballWrapElement.setAttribute('style', 'background: ' + WIZARD_FIREBALLS[getRandomNumberInRange(FIRST_OBJECT, WIZARD_FIREBALLS.length - 1)]);
  fireballInputElement.value = fireballWrapElement.getAttribute('style');
});
