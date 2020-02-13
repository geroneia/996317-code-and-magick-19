'use strict';
(function () {
  window.colorize = function (element, array, input) {
    element.addEventListener('click', function () {
      var color = window.util.getRandom(array);
      if (element.className.toLowerCase() === 'setup-fireball-wrap') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      input.value = color;
    });
  };
})();
