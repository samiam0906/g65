// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div');
}



// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(className) {
  var el = document.createElement('div');
  el.className = className;
  return el;
}



// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
function updateTodoList(todoList) {
  var liItems = todoList.querySelectorAll('li');
  console.log(liItems);
  for (var i = 0; i < liItems.length; i++) {
    if(liItems[i].textContent.includes("COMPLETED")) {
      liItems[i].remove();
    }
    if(liItems[i].textContent.includes("URGENT")) {
      liItems[i].classList.add("important");
      console.log("These are the list items " + liItems[i]);
    }
  }
}

// Define a function named createList that takes one argument.
//   createList (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
function createList(obj) {
  var objectLength = Object.keys(obj).length;
  // console.log(objectLength);
  var objectKeys = Object.keys(obj);
  // console.log(objectKeys);
  var objectVals = Object.values(obj);
  // console.log(objectVals);
  var ulNode = document.createElement('ul');
  for (var i = 0; i < objectLength; i++) {
    var liNode = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.setAttribute('href', objectVals[i]);
    anchor.textContent = objectKeys[i];
    ulNode.appendChild(liNode);
    liNode.appendChild(anchor);
  }
  return ulNode;
}



// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.

// var art = document.querySelector('article');
//
// function extractQuote(art) {
//   var art = document.querySelector('article');
//   console.log(art);
//   var para = document.getElementsByTagName('p');
//   console.log(para);
//   for (var i = 0; i < art.length; i++) {
//     if (para.textContent.includes('"')) {
//       console.log(para);
//       // var art = document.querySelector('article');
//       var block = document.createElement('blockquote');
//       var paraText = para.textContent.split(/"/, 1);
//       var newText = paraText.join(" ");
//       var newArt = art.replaceChild(block, para);
//       block.textContent = newText;
//       console.log(newArt);
//     }
//   }
//   return newArt;
// }


// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.

function createTable(data) {
  var dataLength = data.length;
  console.log(dataLength);
  var newTable = document.createElement("table");
  var tHeader = document.createElement('thead');
  var tBody = document.createElement('tbody');
  var tFooter = document.createElement('tfoot');
  for (var i = 0; i < dataLength; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (i === 0) {
        var newTr = document.createElement('tr');
        var newTh = document.createElement('th');
        var text = document.createTextNode(data[i][j]);
        newTable.appendChild(tHeader);
        tHeader.appendChild(newTr);
        newTr.appendChild(newTh);
        newTh.appendChild(text);
      }
      else if (i === (dataLength - 1)) {
        var newTr = document.createElement('tr');
        var newTd = document.createElement('td');
        var text = document.createTextNode(data[i][j]);
        newTable.appendChild(tFooter);
        tFooter.appendChild(newTr);
        newTr.appendChild(newTd);
        newTd.appendChild(text);
      }
      else {
        var newTr = document.createElement('tr');
        var newTd = document.createElement('td');
        var text = document.createTextNode(data[i][j]);
        newTable.appendChild(tBody);
        tBody.appendChild(newTr);
        newTr.appendChild(newTd);
        newTd.appendChild(text);
      }
      // var newTd = document.createElement('td');
      // var text = document.createTextNode(data[i][j]);
      // newTable.appendChild(newTd);
      // newTd.appendChild(text);
    }
  }
  console.log(newTable);
  return newTable;
}
