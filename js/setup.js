'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var similarList = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_COUNT = 4;
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name=coat-color]');
  var eyesColorInput = document.querySelector('input[name=eyes-color]');
  var fireballColorInput = setupFireball.querySelector('input[name=fireball-color]');
  var getWizardName = function () {
    for (var i = 0; i < WIZARD_NAMES.length; i++) {
      var wizardName = window.util.getRandom(WIZARD_NAMES) + ' ' + window.util.getRandom(WIZARD_SURNAMES);
    }
    return wizardName;
  };
  var getWizard = function (wizard) {
    var wizardReady = similarWizardTemplate.cloneNode(true);
    wizardReady.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardReady.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardReady.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardReady;
  };

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < WIZARDS_COUNT; j++) {
    var anyWizard = {
      name: getWizardName(),
      coatColor: window.util.getRandom(WIZARD_COATS),
      eyesColor: window.util.getRandom(WIZARD_EYES)
    };
    fragment.appendChild(getWizard(anyWizard));
  }
  similarList.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.validation(userNameInput);
  window.colorize(wizardCoat, WIZARD_COATS, coatColorInput);
  window.colorize(wizardEyes, WIZARD_EYES, eyesColorInput);
  window.colorize(setupFireball, FIREBALL_COLORS, fireballColorInput);
})();
