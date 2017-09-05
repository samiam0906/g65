// var p1 = document.querySelector('#par1');
// var p2 = document.querySelector('#par2');
// var p3 = document.querySelector('#par3');
//
// p1.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// })
//
// p2.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// })
//
// p3.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// })

// Brings us back an array like object
var pars = document.querySelectorAll('p');

for (var i = 0; i < pars.length; i++) {
  pars[i].addEventListener('click', function(event) {
    console.log(event.target.textContent);
  });
}
