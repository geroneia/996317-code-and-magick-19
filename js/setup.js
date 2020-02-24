'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var form = userDialog.querySelector('.setup-wizard-form');
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left > right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.validateName(userNameInput);

  var closeAddedForm = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.setup.onErrorCancelLoading();
    window.backend.save(new FormData(evt.target), closeAddedForm, onErrorLoading);
    evt.preventDefault();
  });

  var onSuccessLoading = function (data) {
    wizards = data;
    updateWizards();
  };

  var onErrorLoading = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('error-message');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.setup = {
    onErrorCancelLoading: function () {
      var errorMessage = document.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.parentNode.removeChild(errorMessage);
      }
    },
    // Созает шаблон для волшебника
    getWizard: function (wizard) {
      var wizardReady = similarWizardTemplate.cloneNode(true);
      wizardReady.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardReady.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardReady.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

      return wizardReady;
    }
  };
  window.backend.load(onSuccessLoading, onErrorLoading);
})();
