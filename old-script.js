// Display current date, without formatting
var currentDayDisplay = document.getElementById("currentDay");
var saveBtn = document.querySelectorAll(".saveBtn");
var dateDisplay = Date();
dateDisplay.textContent = `Current date: ${dateDisplay}`;
currentDayDisplay.textContent = dateDisplay;

// Create event listener to assign to save icon reference
saveBtn.addEventListener("click", function () {
  // Save text next to the save button clicked to var 'text' in JQuery & save div id val to "time" var
  var text = document.querySelector(".description").value;
  //event.siblings(".description").val();
  var time = document.querySelector(".time-block").getAttribute("id");

  console.log(text);
  console.log(time);

  localStorage.setItem(time, text);
});

function load() {
  //  Style the hour blocks
  function timeStyler() {
    // Pull the current hour
    var currentTime = moment().hour();

    // Loop over each hour block to style
    document.querySelector(".time-block").forEach(function () {
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
}

load();
