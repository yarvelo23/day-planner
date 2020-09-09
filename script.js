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