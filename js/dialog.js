'use strict';
(function () {
  var USER_DIALOG_X = '80px';
  var USER_DIALOG_Y = '50%';
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.onEscClick(evt, closePopup);
  };
  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    userDialog.style.top = USER_DIALOG_X;
    userDialog.style.left = USER_DIALOG_Y;
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    window.setup.onErrorCancelLoading();
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, closePopup);
  });
})();
