
var currentDayEl = $("#currentDay"); //currentDayEl query the currentDay ID

var timeEl = $(".time-block"); //timeEL query the time-block

var submitBtnEl = $(".saveBtn"); //save button for input txt

var currentDate = moment().format("dddd, MMMM Do"); //set to current moment() date

var currentHr = moment().format("H"); //set to whole moment hr format

function displaySchedule() {

    timeEl.each( function() { //walking through the element array

        var currBlockTime = parseInt($(this).attr("data-id")); //getting each block id-hr
        
        //getting the txt input form the local storage
        $(this).children(".description").val(localStorage.getItem(currBlockTime));

        //check currHr = blockHr add class present (block color: red)
        if(currentHr == currBlockTime) {$(this).children("textarea").addClass("present");} 

        //check currHr > blockHr add class past (block color: gray)
        if(currentHr > currBlockTime) {$(this).children("textarea").addClass("past");} 

        //check currHr < blockHr add class future (block color: green)
        if(currentHr < currBlockTime) {$(this).children("textarea").addClass("future");}
    });

    submitBtnEl.on("click", changeSchedule); //click save btn call changeSchedule func
}

function changeSchedule (event) {  

    var checkHr = $(this).parent().attr("data-id"); //getting the element id=hr
    var text2Add = $(this).siblings(".description").val(); //getting the input text value
    localStorage.setItem(checkHr, text2Add); //store the id-hr and input txt

} 

$(document).ready( () => {

    displaySchedule(); //calling displaySchedule func
    currentDayEl.innerHTML = currentDate;
    currentDayEl.append(currentDate); //display the current date
});