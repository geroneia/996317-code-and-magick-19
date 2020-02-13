'use strict';
(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  window.util = {
    onEscClick: function (evt, cb) {
      if (evt.key === ESC_KEY) {
        cb();
      }
    },

    onEnterClick: function (evt, cb) {
      if (evt.key === ENTER_KEY) {
        cb();
      }
    },

    getRandom: function (array) {
      var data = array[Math.floor(Math.random() * array.length)];
      return data;
    },
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getmixedArray: function (array) {
      var j;
      var temp;
      for (var i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array;
    }
  };
})();
