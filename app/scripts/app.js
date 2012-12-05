var setForecast = function (forecasts) {
  var source   = $("#forecast-template-bitch").html();
  var template = Handlebars.compile(source);

  $('#forecast-placeholder').html(template({forecasts: forecasts}));
};

var setSnowReport = function (report) {
  var source = $('#snow-template-bitch').html();
  var template = Handlebars.compile(source);

  $('#snow-report-placeholder').html(template(report));
};

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

  setForecast(data.forecast);
  setSnowReport(data.snow_report);
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

