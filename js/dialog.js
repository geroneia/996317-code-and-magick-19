'use strict';
(function () {
  var USER_DIALOG_X = '80px';
  var USER_DIALOG_Y = '50%';
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  window.dialog = {
    onPopupEscPress: function (evt) {
      window.util.onEscClick(evt, window.dialog.closePopup);
    },
    openPopup: function () {
      userDialog.classList.remove('hidden');
      document.addEventListener('keydown', window.dialog.onPopupEscPress);
      userDialog.style.top = USER_DIALOG_X;
      userDialog.style.left = USER_DIALOG_Y;
    },

    closePopup: function () {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', window.dialog.onPopupEscPress);
    }
  };

  setupOpen.addEventListener('click', function () {
    window.dialog.openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, window.dialog.openPopup);
  });

  setupClose.addEventListener('click', function () {
    window.setup.onErrorCancelLoading();
    window.dialog.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.onEnterClick(evt, window.dialog.closePopup);
  });
})();
