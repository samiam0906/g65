var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if (n === undefined) {
    n = 1;
  }
	return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {
  return array.pop();
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  if (n === undefined) {
    n = 1;
  }
  return array.slice(-n);
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  var notIncluded = [false, null, 0, "", undefined, NaN];
  var filtered = array.filter(Boolean);
  return filtered;
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  // set new array that combines arrayOne and arrayTwo
  var arrayThree = arrayOne.concat(arrayTwo);
  // iterate over arrayThree to look for elements of arrayTwo
  // and remove them if found
  var filteredArr = arrayThree.filter(function(element) {
    return arrayTwo.indexOf(element) === -1;
  });
  return filteredArr;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
  var smallest = array[0];
  for (var i = 0; i < array.length ; i++){
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  var largest = array[0];
  for (var i = 0; i < array.length ; i++){
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  return array.indexOf(el);
	// Place your solution here
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  // set new empty array
  var newArray = [];
  var index = 0.5;
  // Create a for loop to iterate over array
  for (var i = 0; newArray.length < array.length; i++) {
    // find a random index between 0 and length of array
    index = Math.floor(Math.random() * array.length);
    if (newArray.indexOf(array[index]) === -1) {
      newArray.push(array[index]);
    }
  }
  return newArray;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
  if (typeof collection === 'string' || Array.isArray(collection) === true) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  // Place your solution here
  var newCollection = [];
  if (typeof collection === 'string' || Array.isArray(collection) === true) {
    for (var i = 0; i < collection.length; i ++) {
      newCollection.push(collection[i]);
    }
  } else {
    for (var i = 0; i < Object.keys(collection).length; i ++) {
      newCollection = {};
      for (var key in collection) {
        newCollection[key] = collection[key];
      }
    }
  }
  return newCollection;
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
  var newArray = function(arr) {
    return arr;
  }
  return newArray(collection);
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
  return collection;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
