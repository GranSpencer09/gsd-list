const currentDay = document.getElementById("currentDay");
const text = document.getElementsByTagName("textarea");
const savebtn = document.querySelectorAll("#saveBtn");

// Display the current date
currentDay.textContent = moment().format("MMMM Do, YYYY");

// reload todos
function reload() {
  const savedText = localStorage.getItem("input");
  text.textContent = savedText;
  //styleTime();
}
// style text areas

// listen for click on savebtn

function saving() {
  var text = document.querySelector(".description").values;
  //event.siblings(".description").val();
  var time = document.querySelector(".time-block").getAttribute("id");

  console.log(text);
  console.log(time);

  localStorage.setItem(time, text);
}
// save todos
savebtn.addEventListener("click", saving);
