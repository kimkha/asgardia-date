
module.exports = function AsgardiaDate(date) {
  date = date || new Date();
  var time = +date - 1483228800000; // Jan 01, 0001 in Asgardia calendar
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'Asgard', 'July', 'August', 'September', 'October', 'November', 'December'];

  var parsePair = function(n, d) {
    return [
      ~~(n/d), // floor(n/d)
      n%d
    ];
  };
  var pad = function(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  };

  var ms = parsePair(time, 1000);// Get current millisecond: ms[1]
  var sec = parsePair(ms[0], 60);
  var min = parsePair(sec[0], 60);
  var hr = parsePair(min[0], 24);
  var dayOfM = parsePair(hr[0], 28); // Month has 28 days in Asgardia calendar
  var month = parsePair(dayOfM[0], 13); // Year hase 13 months in Asgardia calendar
  var year = [0, month[0]];
  var dayOfW = parsePair(hr[0], 7); // Week has 7 days

  this.getFullYear = function () {
    return year[1] + 1;
  };
  this.getMonth = function () {
    return month[1];
  };
  this.getDay = function () {
    return dayOfW[1];
  };
  this.getDate = function () {
    return dayOfM[1] + 1;
  };
  this.getHours = function () {
    return hr[1];
  };
  this.getMinutes = function () {
    return min[1];
  };
  this.getSeconds = function () {
    return sec[1];
  };
  this.getMilliseconds = function () {
    return ms[1];
  };
  this.getDateName = function () {
    return pad(this.getDate(), 2);
  };
  this.getMonthName = function () {
    return monthNames[this.getMonth()];
  };
  this.getYearName = function () {
    return pad(this.getFullYear(), 4);
  };
  this.toDateString = function () {
    return this.getMonthName() + ' ' + this.getDateName() + ', ' + this.getYearName();
  };

  return this;
};