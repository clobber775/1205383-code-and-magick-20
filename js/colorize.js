'use strict';
(function () {

  var getRandomColor = function (arr) {
    return arr[Math.floor(arr.length * Math.random())];
  };

  window.colorize = function (element, arr) {
    element.addEventListener('click', function () {
      var color = getRandomColor(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
