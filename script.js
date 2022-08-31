const currentDay = document.getElementById("currentDay");
const text = document.getElementsByTagName("textarea");
const savebtns = document.querySelectorAll(".saveBtn");
const timeblock = document.getElementsByClassName("time-block");

// Display the current date
currentDay.textContent = moment().format("MMMM Do, YYYY");

console.log(timeblock);
console.log(savebtns);

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

let currentTime = moment().hour();
for (let i = 0; i < timeblock.length; i++) {
  const timeHTML = timeblock[i].childNodes[3].getAttribute("id");
  console.log(timeHTML);
}

// listen for click on savebtn
savebtns.forEach((savebtn) => {
  savebtn.addEventListener("click", function saving() {
    // save todos

    var text = document.querySelector(".description").childNodes[3];
    var time = document
      .querySelector(".time-block")
      .childNodes[3].getAttribute("id");

    console.log(text);
    console.log(time);

    localStorage.setItem(time, text);
  });
});

start();
