/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * time: 76ms space: 37.2MB
 */
var dayOfTheWeek = function (day, month, year) {
    year--;
    month--;
    const monthMap = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5, 1];
    const resultMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + monthMap[month] + (month >= 2 && year % 4 === 3 && (year % 100 !== 99 || year % 400 === 399) ? 1 : 0) + day;
    return resultMap[days % 7];
};

