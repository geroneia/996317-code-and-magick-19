'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;

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


// Выбирается случайный синий
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomColor = function () {
  var someBlue = 'hsl(240, ' + getRandomNumber(1, 100) + '%, 50%)';
  return someBlue;
};


window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Сообщение о победе разбивается на строки в месте переноса (тут нужна функция, но я не знаю, как правильно ее написать)
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  var message = 'Ура вы победили! \nСписок результатов:';
  var lineheight = 20;
  var lines = message.split('\n');
  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + (i * lineheight));
  }

  var maxTime = getMaxElement(times);

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], CLOUD_X + GAP * 4 + (TEXT_WIDTH + GAP * 5) * j, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);

    // Находит текущего игрока и отечает красным
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    };
    // Рисует столбики диаграммы
    ctx.fillRect(CLOUD_X + GAP * 4 + (TEXT_WIDTH + GAP * 5) * j, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (barHeight * times[j]) / maxTime, BAR_WIDTH, (barHeight * times[j]) / maxTime);

    // Добавляет статистику в цифрах
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[j]), CLOUD_X + GAP * 4 + (TEXT_WIDTH + GAP * 5) * j, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (barHeight * times[j]) / maxTime - FONT_GAP)
  }
};
