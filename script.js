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