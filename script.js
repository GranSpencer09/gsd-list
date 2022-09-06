const currentDay = document.getElementById("currentDay");
const text = document.getElementsByTagName("textarea");
const savebtns = document.querySelectorAll(".saveBtn");
const timeblock = document.getElementsByClassName("time-block");

// Display the current date
currentDay.textContent = moment().format("MMMM Do, YYYY");

// hard coding to reload and display the stored to-do's
function start() {
  let hour9 = document.querySelector("#hour9");
  let hour9text = localStorage.getItem("hour9");

  hour9.textContent = hour9text;

  let hour10 = document.querySelector("#hour10");
  let hour10text = localStorage.getItem("hour10");

  hour10.textContent = hour10text;

  let hour11 = document.querySelector("#hour11");
  let hour11text = localStorage.getItem("hour11");

  hour11.textContent = hour11text;

  let hour12 = document.querySelector("#hour12");
  let hour12text = localStorage.getItem("hour12");

  hour12.textContent = hour12text;

  let hour13 = document.querySelector("#hour13");
  let hour13text = localStorage.getItem("hour13");

  hour13.textContent = hour13text;

  let hour14 = document.querySelector("#hour14");
  let hour14text = localStorage.getItem("hour14");

  hour14.textContent = hour14text;

  let hour15 = document.querySelector("#hour15");
  let hour15text = localStorage.getItem("hour15");

  hour15.textContent = hour15text;

  let hour16 = document.querySelector("#hour15");
  let hour16text = localStorage.getItem("hour15");

  hour16.textContent = hour15text;

  let hour17 = document.querySelector("#hour17");
  let hour17text = localStorage.getItem("hour17");

  hour17.textContent = hour17text;

  timeStyler();

  // style text areas
  function timeStyler() {
    let currentTime = moment().hour();
    for (let i = 0; i < timeblock.length; i++) {
      let timeHTML = timeblock[i].childNodes[3]
        .getAttribute("id")
        .split("hour")[1];

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
    var text = event.path[1].children[1].value;
    var time = event.path[1].children[1].id;

    localStorage.setItem(time, text);
  });
});

start();

// I'd like to optimize this so I push the to-do's to an array, save the array to local storage and then use a for loop to callback to the array and loop over it to display the stored values
