window.addEventListener("click", function() {
  alert("You clicked on the page!");
});

var button = document.querySelector('button');

var clickAlert = function() {
  alert("SOMEONE CLICKED THE BUTTON!!!");
};

button.addEventListener('click', clickAlert);

button.removeEventListener('click', clickAlert);
