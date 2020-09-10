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
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form8").addClass("present");
    };

    // 9am time
    time2 = moment().startOf('day').add(9, "hours");

    if (currentTime.isAfter(time2)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form9").addClass("present");
    };

    // 10am time
    time3 = moment().startOf('day').add(10, "hours");

    if (currentTime.isAfter(time3)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form10").addClass("present");
    };

    // 11am time
    time4 = moment().startOf('day').add(11, "hours");

    if (currentTime.isAfter(time4)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form11").addClass("present");
    };

    // 12pm time
    time5 = moment().startOf('day').add(12, "hours");

    if (currentTime.isAfter(time5)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form12").addClass("present");
    };

    // 1pm time
    time6 = moment().startOf('day').add(13, "hours");

    if (currentTime.isAfter(time6)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form1").addClass("present");
    };

    // 2pm time
    time7 = moment().startOf('day').add(14, "hours");

    if (currentTime.isAfter(time7)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form2").addClass("present");
    };

    // 3pm time
    time8 = moment().startOf('day').add(15, "hours");

    if (currentTime.isAfter(time8)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form3").addClass("present");
    };

    // 4pm time
    time9 = moment().startOf('day').add(16, "hours");

    if (currentTime.isAfter(time9)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form4").addClass("present");
    };

    // 5pm time
    time10 = moment().startOf('day').add(17, "hours");

    if (currentTime.isAfter(time10)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form5").addClass("present");
    };
}

verifyTime();

// variable to hold input
var input = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

// for loop
for (var i = 0; i < input.length; i++) {
    var inputHour = localStorage.getItem(input[i]);
    $(".form" + input[i]).val(inputHour);
}

