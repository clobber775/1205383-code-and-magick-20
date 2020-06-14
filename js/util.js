'use strict';
(function () {
  window.getRandomNumberInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  window.getRandomNumber = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };

})();
