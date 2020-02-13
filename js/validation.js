'use strict';
(function () {
  var MIN_NAME_LENGTH = 2;

  window.validateName = function (element) {
    element.addEventListener('input', function (evt) {
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
  };
})();
