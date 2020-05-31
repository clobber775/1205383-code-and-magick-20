'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;
var TEXT_HEIGHT = 70;
var TEXT_Y = 27;
var TEXT_X = 120;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

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

var getRandomNumberInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomHslSaturation = function () {
  return 'hsl(255, ' + (getRandomNumberInRange(1, 100) + '%') + ', 50%)';
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + GAP * 2);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + BAR_HEIGHT + TEXT_HEIGHT);
    ctx.fillText(times[i].toFixed(0), CLOUD_X + GAP + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_HEIGHT + TEXT_HEIGHT - GAP - (BAR_HEIGHT * times[i]) / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomHslSaturation();
    }
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + BAR_HEIGHT + TEXT_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);

  }
};
