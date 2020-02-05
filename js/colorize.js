'use strict';
(function () {
  window.colorize = function (element, array, input) {
    element.addEventListener('click', function () {
      var color = window.randomize(array);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      input.value = color;
    });
  };
})();
