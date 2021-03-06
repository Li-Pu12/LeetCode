const daysInMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const leapYears = (y) =>
  Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);

function daysAfter1970(date) {
  let [year, month, day] = date.split("-").map(Number);
  t = leapYears(year) - 477 - (leapYears(year) > leapYears(year - 1) && month <= 2 ? 1 : 0);
  return (year - 1970) * 365 + t + daysInMonth[month - 1] + day;
}
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 * time: 88ms space: 38MB
 */
var daysBetweenDates = function (date1, date2) {
  let days1 = daysAfter1970(date1);
  let days2 = daysAfter1970(date2);
  return days1 > days2 ? days1 - days2 : days2 - days1;
};
