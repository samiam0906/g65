var button = document.querySelector('button');

button.addEventListener('click', function() {
  var n = parseInt(button.innerText);
  n = n+1;
  button.innerText = n;
})
