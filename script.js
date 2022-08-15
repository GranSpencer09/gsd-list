// Display current date, without formatting
var currentDayDisplay = document.getElementById("currentDay");
var dateDisplay = Date();
dateDisplay.textContent = `Current date: ${dateDisplay}`;
currentDayDisplay.textContent = dateDisplay;

// Once the page loads, run this function
$(document).ready(function () {
  // Create event listener to assign to save icon reference
  $(".saveBtn").on("click", function () {
    // Save text next to the save button clicked to var 'text' in JQuery & save div id val to "time" var
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // ("hour9");
    // hour9;
    // ("hour9");

    console.log(text);
    console.log(time);

    //time.id;

    // Store 'text' value to local storage
    // localStorage.setItem("time", time);
    // localStorage.setItem("text", text);
    localStorage.setItem(time, text);
  });

  //  Style the hour blocks
  function timeStyler() {
    // Pull the current hour
    var currentTime = moment().hour();

    // Loop over each hour block to style
    $(".time-block").each(function () {
      // set time from time-blocks equal to var
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // if statement to style time-blocks appropriately
      if (blockTime === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else if (blockTime > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  }

  // Pull exisitng text and display it
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeStyler();
});
