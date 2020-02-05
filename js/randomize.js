'use strict';
(function () {
  window.randomize = function (array) {
    var data = array[Math.floor(Math.random() * array.length)];
    return data;
  };
})();
