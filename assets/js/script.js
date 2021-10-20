//currentDayEl query the currentDay ID
var currentDayEl = $("#currentDay");

//timeEL query the time-block
var timeEl = $("time-block");


var scheduleList = JSON.parse(localStorage.getItem('taskInfo')) || [];
const taskInfo = {};

//currentDate is set the the moment format of day,month,date,year
var currentDate = moment().format("dddd, MMMM Do");

var currentHr = moment().format("H");

function displaySchedule() {
    timeEl.each( () => {
        var currBlockTime = parseInt($(this).attr("data-id"));

        var taskInfo = {
            text: "",
            hour: currBlockTime
        }

        if(currBlockTime.isSame(currentHr)){
            $(this).find("textarea").addClass("present");  
        } 

        if(currBlockTime.isBefore(currentHr)) {
            $(this).find("textarea").addClass("past");
        } 

        if(currBlockTime.isAfter(currentHr)){
            $(this).find("textarea").addClass("present");
        }

        scheduleList.push(taskInfo);
    })
    localStorage.setItem("totalSchedule", JSON.stringify(scheduleList));
}


$(document).ready( () => {
   // if(!localStorage.getItem("totalSchedule")){
       displaySchedule();
   // }
    //display the current date
    currentDayEl.innerHTML = currentDate;
    currentDayEl.append(currentDate);
});
