// Current Day and Time Table Hours
var currentDay = moment().format("dddd, MMMM Do"); 
$("#currentDay").text(currentDay);

// Color Coordination


// Declaring Variables for event entries
var eventEntry = {
    nine: document.getElementById("nineEvent"),
    ten: document.getElementById("tenEvent"),
    eleven: document.getElementById("elevenEvent"),
    twelve: document.getElementById("twelveEvent"),
    one: document.getElementById("oneEvent"),
    two: document.getElementById("twoEvent"),
    three: document.getElementById("threeEvent"),
    four: document.getElementById("fourEvent"),
    five: document.getElementById("fiveEvent")
};

// Recalling the local storage to the HTML input field
eventEntry.nine.value = localStorage.getItem("nine entry");
eventEntry.ten.value = localStorage.getItem("ten entry");
eventEntry.eleven.value = localStorage.getItem("eleven entry");
eventEntry.twelve.value = localStorage.getItem("twelve entry");
eventEntry.one.value = localStorage.getItem("one entry");
eventEntry.two.value = localStorage.getItem("two entry");
eventEntry.three.value = localStorage.getItem("three entry");
eventEntry.four.value = localStorage.getItem("four entry");
eventEntry.five.value = localStorage.getItem("five entry");

// Button events for saving event to local storage
$(".nine").on("click", function(){
    localStorage.setItem("nine entry", eventEntry.nine.value);
});
$(".ten").on("click", function(){
    localStorage.setItem("ten entry", eventEntry.ten.value);
});
$(".eleven").on("click", function(){
    localStorage.setItem("eleven entry", eventEntry.eleven.value);
});
$(".twelve").on("click", function(){
    localStorage.setItem("twelve entry", eventEntry.twelve.value);
});
$(".one").on("click", function(){
    localStorage.setItem("one entry", eventEntry.one.value);
});
$(".two").on("click", function(){
    localStorage.setItem("two entry", eventEntry.two.value);
});
$(".three").on("click", function(){
    localStorage.setItem("three entry", eventEntry.three.value);
});
$(".four").on("click", function(){
    localStorage.setItem("four entry", eventEntry.four.value);
});
$(".five").on("click", function(){
    localStorage.setItem("five entry", eventEntry.five.value);
});
