'use strict';
var userDialog = document.querySelector('.setup');
var similarList = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;
var MIN_NAME_LENGTH = 2;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

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
    coatColor: getRandomData(WIZARD_COATS),
    eyesColor: getRandomData(WIZARD_EYES)
  };
  fragment.appendChild(getWizard(anyWizard));
}
similarList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Описывает открытие/закрытие окна выбора персонажа
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== userNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// Добавляет валидацию формы
// userNameInput.addEventListener('invalid', function (evt) {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});
