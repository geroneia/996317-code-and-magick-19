'use strict';
(function () {
  var WIZARD_COATS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var WIZARD_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };
  var setupWizard = document.querySelector('.setup-wizard');

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var coatColorInput = document.querySelector('input[name=coat-color]');
  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandom(WIZARD_COATS);
    wizardCoat.style.fill = color;
    coatColorInput.value = color;
    wizard.onCoatChange(color);
  });

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesColorInput = document.querySelector('input[name=eyes-color]');
  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandom(WIZARD_EYES);
    wizardEyes.style.fill = color;
    eyesColorInput.value = color;
    wizard.onEyesChange(color);
  });

  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = setupFireball.querySelector('input[name=fireball-color]');
  setupFireball.addEventListener('click', function () {
    var color = window.util.getRandom(FIREBALL_COLORS);
    setupFireball.style.backgroundColor = color;
    fireballColorInput.value = color;
  });

  window.wizard = wizard;
})();
