'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var barWidth = 150;

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
  ctx.font = '16px Tahoma';
  ctx.textBaseline = 'hanging';
  var message = 'Ура вы победили! \nСписок результатов:';
  var lineheight = 20;
  var lines = message.split('\n');
  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], CLOUD_X + GAP, CLOUD_Y + GAP + (i * lineheight));
  }

  var maxTime = getMaxElement(times);

  // Поворачиваются столбики гистограммы
  ctx.rotate(270 * Math.PI / 180);
  ctx.translate(-400, 100);
  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], CLOUD_X + GAP + (TEXT_WIDTH + GAP * 5) * j, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);
    // if (names[i] = 'Вы') {
    //   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    //   console.log('Красный!!');
    // } else {
    //   ctx.fillStyle = getRandomColor();
    // };

    ctx.fillStyle = getRandomColor();

    ctx.fillRect(CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + (GAP * 5 + BAR_HEIGHT) * j, (barWidth * times[j]) / maxTime, BAR_HEIGHT);
    // ctx.fillText(times[i], 0, 0);
  }
};
