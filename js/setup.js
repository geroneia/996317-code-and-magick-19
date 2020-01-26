'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomData = function (array) {
  var color = array[Math.floor(Math.random() * array.length)];
  return color;
};

var generateWizardName = function () {
  var generatedWizardNames = [];
  for (var i = 0; i < WIZARD_NAMES.length; i++) {
    var wizardName = generateRandomData(WIZARD_NAMES) + ' ' + generateRandomData(WIZARD_SURNAMES);
    generatedWizardNames.push(wizardName);
  }
  return generatedWizardNames;
};

var wizards = [
  {
    name: generateWizardName()[0],
    coatColor: generateRandomData(WIZARD_COATS),
    eyesColor: generateRandomData(WIZARD_EYES)
  },
  {
    name: generateWizardName()[1],
    coatColor: generateRandomData(WIZARD_COATS),
    eyesColor: generateRandomData(WIZARD_EYES)
  },
  {
    name: generateWizardName()[2],
    coatColor: generateRandomData(WIZARD_COATS),
    eyesColor: generateRandomData(WIZARD_EYES)
  },
  {
    name: generateWizardName()[3],
    coatColor: generateRandomData(WIZARD_COATS),
    eyesColor: generateRandomData(WIZARD_EYES)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
