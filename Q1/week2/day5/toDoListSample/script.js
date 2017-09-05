var butt = document.querySelector('button');
var inputBox = document.querySelector('input');
var toDoList = document.querySelector('ul');

butt.addEventListener('click', function(e) {
  var listItem = document.createElement('li');
  listItem.textContent = inputBox.value
  toDoList.appendChild(listItem);
})
