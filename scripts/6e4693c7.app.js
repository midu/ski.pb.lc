$(function () {
  var $countdown = $('#countdown');
  var until = new Date(2013, 2, 2, 8, 25);
  var timespan = null;

  var update = function () {
    timespan = countdown(until, null, countdown.DEFAULTS);
    $countdown.html(timespan.toHTML());
  };
});
