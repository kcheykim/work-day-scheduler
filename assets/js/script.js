//currentDayEl query the currentDay ID
var currentDayEl = $("#currentDay");

//timeEL query the time-block
var timeEl = $(".time-block");

var submitBtnEl = $(".saveBtn");

//currentDate is set the the moment format of day,month,date,year
var currentDate = moment().format("dddd, MMMM Do");

//currentHr is set to the whole hour
var currentHr = moment().format("H");

//two array of scheduleList and totalObjs
var scheduleList = JSON.parse(localStorage.getItem("taskInfo")) || [];
const totalObjs = [];

function displaySchedule() {
    
    //running through the loop of the timeEl
    timeEl.each( function() {
        //setting currBlockTime to the data-id corresponding to miltary time
        var currBlockTime = parseInt($(this).attr("data-id"));

        //creating an object called taskInfo with two properties of text and hour 
        var taskInfo = {
            text: "",
            hour: currBlockTime
        }
        //push taskInfo obj into the scheduleList array
        scheduleList.push(taskInfo);

        if(currBlockTime == currentHr){
            $(this).children("textarea").addClass("present");  
        } 

        if(currBlockTime < currentHr) {
            $(this).children("textarea").addClass("past");
        } 

        if(currBlockTime < currentHr){
            $(this).children("textarea").addClass("future");
        }
      
    });
    localStorage.setItem("taskInfo", JSON.stringify(scheduleList));
}

function changeSchedule () {

    var checkHr = parseInt($(this).attr("data-id"));
    var text2Add = $(this).children("textarea").val();
    for(var j = 0; j < scheduleList.length; j++) {
        if(scheduleList[i].hour === checkHr) {
            taskInfo[i].text = text2Add;
            scheduleList.push(taskInfo);
        }
    }

    localStorage.setItem("totalObjs", JSON.stringify(scheduleList)); 
/*
    if(submitBtnEl) {

        var currBlockHr = parseInt($(this).attr("data-id"));
        alert(currBlockHr);
        var text2Add = $(this).children("textare").val();
        alert(text2Add);
       
        for(var i = 0; i < scheduleList.length; i++) {
            if(scheduleList[i].hour == currBlockHr) {
                scheduleList[i].text = text2Add;
            }
        }
    } else {
        scheduleList = JSON.parse(localStorage.getItem("totalObjs"));
        for (var j = 0; j < scheduleList.length; j++) {
            var blockTxt = scheduleList[i].text;
            var blockHr = scheduleList[i].hour;

            $("[data-id" + blockHr + "]").children("textarea").val(blockTxt);
        }
    }*/
}


$(document).ready( () => {

   submitBtnEl.on("click", changeSchedule);
    
   // if(!localStorage.getItem("totalSchedule")){
       displaySchedule();
   // }
    //display the current date
    currentDayEl.innerHTML = currentDate;
    currentDayEl.append(currentDate);
});