(function() {
  'use strict';

  // YOUR CODE HERE
})();

// Part 1

var stopButt = document.querySelector("#stopButton");
stopButt.addEventListener('click', function() {
  stopButt.classList.toggle("stop");
  document.querySelector("#stopLight").classList.toggle("stop");
});

var slowButt = document.querySelector("#slowButton");
slowButt.addEventListener('click', function() {
  slowButt.classList.toggle("slow");
  document.querySelector("#slowLight").classList.toggle("slow");
});

var goButt = document.querySelector("#goButton");
goButt.addEventListener('click', function() {
  goButt.classList.toggle("go");
  document.querySelector("#goLight").classList.toggle("go");
});

// Part 2

stopButt.addEventListener('mouseenter', function(event) {
  console.log("Entered " + event.target.textContent + " button");
});
stopButt.addEventListener('mouseleave', function(event) {
  console.log("Left " + event.target.textContent + " button");
});

slowButt.addEventListener('mouseenter', function(event) {
  console.log("Entered " + event.target.textContent + " button");
});
slowButt.addEventListener('mouseleave', function(event) {
  console.log("Left " + event.target.textContent + " button");
});

goButt.addEventListener('mouseenter', function(event) {
  console.log("Entered " + event.target.textContent + " button");
});
goButt.addEventListener('mouseleave', function(event) {
  console.log("Left " + event.target.textContent + " button");
});

// Bonus

document.querySelector("#controls").addEventListener('click', function(e) {
  if (e.target.matches(".button")) {
    if (e.target.matches(".stop")) {
      console.log(e.target.textContent + " bulb on");
    }
    else if (e.target.matches(".slow")){
      console.log(e.target.textContent + " bulb on");
    }
    else if (e.target.matches(".go")) {
      console.log(e.target.textContent + " bulb on");
    }
    else {
      console.log(e.target.textContent + " bulb off");
    }
  }
})
