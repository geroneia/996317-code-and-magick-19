'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var LINE_HEIGHT = 20;
  var leftMargin = GAP * 4;
  var topMargin = GAP * 2;
  var distanceBetweenColumns = GAP * 5;
  var message = 'Ура вы победили! \nСписок результатов:';
  var histogramX = CLOUD_X + leftMargin;
  var histogtamBottom = CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  // Выбирается случайный оттенок
  var getRandomColor = function () {
    var someBlue = 'hsl(240, ' + window.util.getRandomNumber(1, 100) + '%, 50%)';
    return someBlue;
  };

  var renderHistogram = function (ctx, names, times) {
    var maxTime = getMaxElement(times);

    for (var j = 0; j < names.length; j++) {
      ctx.fillStyle = 'black';
      ctx.fillText(names[j], histogramX + (TEXT_WIDTH + distanceBetweenColumns) * j, histogtamBottom);

      // Находит текущего игрока и отечает красным
      if (names[j] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = getRandomColor();
      }
      // Рисует столбики диаграммы
      ctx.fillRect(histogramX + (TEXT_WIDTH + distanceBetweenColumns) * j, histogtamBottom - GAP - (BAR_HEIGHT * times[j]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[j]) / maxTime);

      // Добавляет статистику в цифрах
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[j]), histogramX + (TEXT_WIDTH + distanceBetweenColumns) * j, histogtamBottom - GAP - (BAR_HEIGHT * times[j]) / maxTime - FONT_GAP);
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    // Сообщение о победе разбивается на строки в месте переноса
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    var lines = message.split('\n');
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], CLOUD_X + leftMargin, CLOUD_Y + topMargin + (i * LINE_HEIGHT));
    }

    renderHistogram(ctx, names, times);
  };

})();
