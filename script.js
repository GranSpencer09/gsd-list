const currentDay = document.getElementById("currentDay");
const text = document.getElementsByTagName("textarea");
const savebtns = document.querySelectorAll(".saveBtn");
const timeblock = document.getElementsByClassName("time-block");

// Display the current date
currentDay.textContent = moment().format("MMMM Do, YYYY");

// console.log(timeblock);
console.log(savebtns);

function start() {
  // reload todos

  const savedText = localStorage.getItem("input");
  text.textContent = savedText;
  timeStyler();

  // style text areas
  function timeStyler() {
    let currentTime = moment().hour();
    for (let i = 0; i < timeblock.length; i++) {
      let timeHTML = timeblock[i].childNodes[3]
        .getAttribute("id")
        .split("hour")[1];
      console.log(timeHTML);
      console.log(currentTime);
      if (timeHTML == currentTime) {
        timeblock[i].classList.add("present");
        timeblock[i].classList.remove("future");
        timeblock[i].classList.remove("past");
      } else if (timeHTML > currentTime) {
        timeblock[i].classList.remove("present");
        timeblock[i].classList.add("future");
        timeblock[i].classList.remove("past");
      } else {
        timeblock[i].classList.remove("present");
        timeblock[i].classList.remove("future");
        timeblock[i].classList.add("past");
      }
    }
  }
}

// listen for click on each savebtn
savebtns.forEach((savebtn) => {
  savebtn.addEventListener("click", function handleClick(event) {
    console.log();

    var text = event.path[1].children[1].value;
    var time = event.path[1].children[1].id;

    console.log(text);
    console.log(time);

    localStorage.setItem(time, text);
  });
});

start();
