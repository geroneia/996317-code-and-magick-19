'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var similarList = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
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
  var form = userDialog.querySelector('.setup-wizard-form');

  // Созает шаблон для волшебника
  var getWizard = function (wizard) {
    var wizardReady = similarWizardTemplate.cloneNode(true);
    wizardReady.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardReady.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardReady.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardReady;
  };

  window.validation(userNameInput);
  window.colorize(wizardCoat, WIZARD_COATS, coatColorInput);
  window.colorize(wizardEyes, WIZARD_EYES, eyesColorInput);
  window.colorize(setupFireball, FIREBALL_COLORS, fireballColorInput);

  var closeAddedForm = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), closeAddedForm, onErrorLoading);
    evt.preventDefault();
  });

  var onSuccessLoading = function (wizards) {
    var fragment = document.createDocumentFragment();
    window.util.getmixedArray(wizards);
    for (var j = 0; j < WIZARDS_COUNT; j++) {
      var anyWizard = {
        name: wizards[j].name,
        colorCoat: wizards[j].colorCoat,
        colorEyes: wizards[j].colorEyes
      };
      fragment.appendChild(getWizard(anyWizard));
    }
    similarList.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onErrorLoading = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onSuccessLoading, onErrorLoading);
})();
