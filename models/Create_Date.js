
var gotMonthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
var date = new Date();
var gotDay = date.getDate();
var gotMonthIndex = date.getMonth();
var gotYear = date.getFullYear();

var create_Date = gotDay + ' ' + gotMonthNames[gotMonthIndex] + ' ' + gotYear

module.exports = { create_Date: create_Date };