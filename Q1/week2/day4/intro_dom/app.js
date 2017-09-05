var getTitle = document.getElementsByTagName('h1');
console.log(getTitle);

var getH3 = document.getElementsByTagName('h3');

var changeFood = document.getElementsByTagName('h3')[0];
console.log(changeFood);
changeFood.textContent = "Tacos";
changeFood.style.color = "red";

var changePizza = document.getElementsByTagName('li')[1];
console.log(changePizza);
changePizza.textContent = "Veggie";

var changeImg = document.getElementsByClassName('foodPic')[0];
console.log(changeImg);
changeImg.src = "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Chicken-Watermelon-Tacos-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1465935996619.jpeg";

var iceCreamDescrpt = document.createElement("p");
iceCreamDescrpt.textContent = "Helado is so great after tacos";

.select("h3").append(iceCreamDescrpt);
