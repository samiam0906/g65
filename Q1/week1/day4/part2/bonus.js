// Define a function named bigSum that takes in an arbitrary number of
// arguments. Assume all arguments are a number.
//
// Return the sum of all of the arguments. For example, given 1, 2, 3, and 4,
// then return 10. If there are no arguments, return 0.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function bigSum() {
  // YOUR CODE HERE

}

// Define a function named pluck that takes in two arguments.
//     arr (array of objects)
//     key (string)
//
// Return a new array where each element is the keyed value of each object.
//
// For example, given the array:
//    [
//      { name: 'moe', age: 40 },
//      { name: 'larry', age: 50 },
//      { name: 'curly', age: 60 }
//    ]
//
// and the key 'name', then return ['moe', 'larry', 'curly'].
function pluck(arr, key) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}



// Define a function named pick that takes in two arguments.
//    obj (object)
//    keys (array of strings)
//
// Return a new object that contains only the specified keys. For example, given
// { name: 'moe', age: 50, id: 1 } and ['name', 'age'], then return
// { name: 'moe', age: 50 }.
function pick(obj, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in obj) {
      if (key === keys[i]) {
        newObj[key] = obj[key];
        console.log(newObj);
      }
    }
  }
  return newObj;
}




// Define a function named merge that takes in two arguments.
//    arr1 (array of sorted numbers)
//    arr2 (array of sorted numbers)
//
// Return a new array that contains all the numbers in each array still sorted.
// For example, given [1, 3, 5] and [2, 4], then return [1, 2, 3, 4, 5].
function merge(arr1, arr2) {
  var mergedArr = arr1.concat(arr2);
  return mergedArr.sort(function(a,b){return a - b});
}



// Define a function named unique that takes in one argument.
//    arr (array of strings)
//
// Return a new array that contains all the elements of arr minus any
// duplicates. For example, given ['a', 'b', 'a', 'c'], then return
// ['a', 'b', 'c'].
function unique(arr) {
  var newArr = [];
}
