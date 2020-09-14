
var currentDay = moment().format("dddd, MMMM Do");
var eventEntry = document.getElementById("newEvent"); 
$("#currentDay").text(currentDay);
$("#button-addon2").on("click", function(){
    event.preventDefault();
    localStorage.setItem("event entry", eventEntry.value);
});
