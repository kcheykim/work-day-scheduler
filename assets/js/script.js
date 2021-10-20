//currentDayEl query the currentDay ID
var currentDayEl = $("#currentDay");

//currentDate is set the the moment format of day,month,date,year
var currentDate = moment().format("dddd, MMMM DD, YYYY");








$(document).ready( () => {

//display the current date
currentDayEl.innerHTML = currentDate;
currentDayEl.append(currentDate);

});
