var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState == 4 && request.status == 200) {
    var response = JSON.parse(request.responseText);
    var childrenArray = response.data.children;
    for (var i = 0; i < childrenArray.length; i++) {
      console.log(childrenArray[i].data.title);
    }
    // console.log(response);
    // document.querySelector('body').innerHTML = response.data.children[0].data.title;
    // console.log(response.data.children[0].data.title);
  }
}




request.open('GET', 'https://www.reddit.com/r/starwars.json');

request.send();
