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
    }
  };
})();
