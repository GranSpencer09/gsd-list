const currentDay = document.getElementById("currentDay");
const text = document.getElementsByTagName("textarea");
const savebtn = document.querySelector("saveBtn");
const timeblock = document.getElementsByClassName("time-block");

// Display the current date
currentDay.textContent = moment().format("MMMM Do, YYYY");

console.log(timeblock[0].childNodes[3].getAttribute("id"));
console.log(savebtn);

function start() {
  // reload todos
  function reload() {
    const savedText = localStorage.getItem("input");
    text.textContent = savedText;
    //styleTime();
  }
  // style text areas
  function timeStyler() {
    let currentTime = moment().hour();
    for (let i = 0; i < timeblock.length; i++) {
      const timeHTML = timeblock[i].childNodes[3].getAttribute(id);
      console.log(timeHTML);
    }
  }
}
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

start();
