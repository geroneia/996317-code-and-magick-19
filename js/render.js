'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var similarList = userDialog.querySelector('.setup-similar-list');
  window.render = {
    renderWizards: function (wizards) {
      var fragment = document.createDocumentFragment();
      var takeNumber = wizards.length > 4 ? 4 : wizards.length;
      similarList.innerHTML = '';
      for (var j = 0; j < takeNumber; j++) {
        var anyWizard = {
          name: wizards[j].name,
          colorCoat: wizards[j].colorCoat,
          colorEyes: wizards[j].colorEyes
        };
        fragment.appendChild(window.setup.getWizard(anyWizard));
      }
      similarList.appendChild(fragment);

      userDialog.querySelector('.setup-similar').classList.remove('hidden');
    }
  };
})();
