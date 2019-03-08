
var gotMonthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
var date = new Date();
var gotDay = date.getDate();
var gotMonthIndex = date.getMonth() + 1;
var gotYear = date.getFullYear();

var create_Date = gotDay + ' ' + gotMonthNames[gotMonthIndex] + ' ' + gotYear

var current_date = gotYear + '/' + gotMonthIndex + '/' + gotDay 

module.exports = { create_Date: create_Date };
module.exports = { current_date: current_date };