// using moment method to record date and time
moment(Date);
// using the moment method to write the current date to the screen
$("#currentDay").text("Today's Date: " + moment().format('dddd MMMM Do YYYY, h:mm a'));

// variable for current time
var currentTime = moment();

// setting currentTime variable to return the current hour
currentTime = currentTime.startOf("hour");

// variable to indicate the starting time
var startTime = moment().startOf('day').add(8, "hours");

// populating 8am timeslot
var time1 = startTime.add(0, "h");
time1 = time1.format('hh:mm A');
// writing the time to the screen
$(".block1").text(time1);

// 9am timeslot
var time2 = startTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

// 10am timeslot
var time3 = startTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

// 11am timeslot
var time4 = startTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

// 12pm timeslot
var time5 = startTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

// 1pm timeslot
var time6 = startTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

// 2pm timeslot
var time7 = startTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

// 3pm timeslot
var time8 = startTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

// 4pm timeslot
var time9 = startTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

// 5pm timeslot
var time10 = startTime.add(1, "h");
time10 = time10.format('hh:mm A');
$(".block10").text(time10);

// function to check current time and apply css styling accordingly
function verifyTime() {
    // incorporates 8am time as the starting reference time
    time1 = moment().startOf('day').add(8, "hours");
    // rounding the current time to the start of the hour
    currentTime = currentTime.startOf("hour");

    // conditional statements to apply styling to time slot
    if (currentTime.isAfter(time1)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
}

