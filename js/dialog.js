'use strict';
(function () {
  var USER_DIALOG_X = '80px';
  var USER_DIALOG_Y = '50%';
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');


  var onPopupEscPress = function (evt) {
    window.util.onEscClick(evt, close);
  };
  var open = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    userDialog.style.top = USER_DIALOG_X;
    userDialog.style.left = USER_DIALOG_Y;
  };

  var close = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };


  setupOpen.addEventListener('click', function () {
    open();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, open);
  });

  setupClose.addEventListener('click', function () {
    window.setup.onErrorCancelLoading();
    close();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, close);
  });
})();
