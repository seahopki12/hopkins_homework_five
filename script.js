// Current Day and Time Table Hours
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);



// Declaring Variables for event entries
var eventEntry = {
    nine: document.getElementById("9"),
    ten: document.getElementById("10"),
    eleven: document.getElementById("11"),
    twelve: document.getElementById("12"),
    one: document.getElementById("13"),
    two: document.getElementById("14"),
    three: document.getElementById("15"),
    four: document.getElementById("16"),
    five: document.getElementById("17")
};

// Color Coordination
var idNames = [eventEntry.nine, eventEntry.ten, eventEntry.eleven, eventEntry.twelve, eventEntry.one, eventEntry.two, eventEntry.three, eventEntry.four, eventEntry.five]
var exactHour = moment().hour();
console.log(exactHour);

for (i = 0; i < idNames.length; i++) {
    if (exactHour == idNames[i].id) {
        $(idNames[i]).css("background-color", "red");
    } else if (exactHour > idNames[i].id) {
        $(idNames[i]).css("background-color", "grey");
    } else {
        $(idNames[i]).css("background-color", "green");
    };
};
// var values = {
//     hours: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"],
//     elements: [eventEntry.nine, eventEntry.ten, eventEntry.eleven, eventEntry.twelve, eventEntry.one, eventEntry.two, eventEntry.three, eventEntry.four, eventEntry.five]
// };

// for (var i = 0; i < values.hours.length; i++) {
//     if (moment().isBefore(values.hours[i])) {
//         $(values.elements[i]).css("background-color", "green")
//     } else if (moment().isAfter(values.hours[i])) {
//         $(values.elements[i]).css("background-color", "grey")
//     } else {
//         $(values.elements[i]).css("background-color", "red")
//     };
// };

// if (moment().isBefore('9:00', 'hour')) {
//     $("#nineEvent").css("background-color", "green");
// } else if (moment().isAfter('9:00', 'hour')) {
//     $("#nineEvent").css("background-color", "grey");
// } else {
//     $("#nineEvent").css("background-color", "red");
// };

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
$(".nine").on("click", function () {
    localStorage.setItem("nine entry", eventEntry.nine.value);
});
$(".ten").on("click", function () {
    localStorage.setItem("ten entry", eventEntry.ten.value);
});
$(".eleven").on("click", function () {
    localStorage.setItem("eleven entry", eventEntry.eleven.value);
});
$(".twelve").on("click", function () {
    localStorage.setItem("twelve entry", eventEntry.twelve.value);
});
$(".one").on("click", function () {
    localStorage.setItem("one entry", eventEntry.one.value);
});
$(".two").on("click", function () {
    localStorage.setItem("two entry", eventEntry.two.value);
});
$(".three").on("click", function () {
    localStorage.setItem("three entry", eventEntry.three.value);
});
$(".four").on("click", function () {
    localStorage.setItem("four entry", eventEntry.four.value);
});
$(".five").on("click", function () {
    localStorage.setItem("five entry", eventEntry.five.value);
});
