// Insert event JavaScript here
var buttGroup = document.querySelector("#buttonGroup");

buttGroup.addEventListener('click', function(event) {
  console.log(event.target.textContent);
})
