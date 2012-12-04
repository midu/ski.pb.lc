window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

window.displayWeather = function (json) {
  var data = json.value.items[0];

  console.log('kikou', data);
};

$(function () {
  var $countdown = $('#countdown');
  var until = new Date(2013, 2, 2, 8, 25);
  var timespan = null;

  var update = function () {
    timespan = countdown(until, null, countdown.DEFAULTS);
    $countdown.html(timespan.toHTML());
  };

  (function loop(){
    requestAnimFrame(loop);
    update();
  })();


});

