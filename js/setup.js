'use strict';
var userDialogElement = document.querySelector('.setup');
userDialogElement.classList.remove('hidden');
var similarListElement = userDialogElement.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomData = function (array) {
  var color = array[Math.floor(Math.random() * array.length)];
  return color;
};

var getWizardName = function () {
  for (var i = 0; i < WIZARD_NAMES.length; i++) {
    var wizardName = getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES);
  }
  return wizardName;
};

var wizards = [
  {
    name: getWizardName(),
    coatColor: getRandomData(WIZARD_COATS),
    eyesColor: getRandomData(WIZARD_EYES)
  },
  {
    name: getWizardName(),
    coatColor: getRandomData(WIZARD_COATS),
    eyesColor: getRandomData(WIZARD_EYES)
  },
  {
    name: getWizardName(),
    coatColor: getRandomData(WIZARD_COATS),
    eyesColor: getRandomData(WIZARD_EYES)
  },
  {
    name: getWizardName(),
    coatColor: getRandomData(WIZARD_COATS),
    eyesColor: getRandomData(WIZARD_EYES)
  }
];

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(getWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
