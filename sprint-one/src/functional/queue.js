var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  var indexCounter = 0;
  var removeNext = 0;

  someInstance.enqueue = function(value) {
    storage[indexCounter] = value;
    indexCounter ++;
  };

  someInstance.dequeue = function() {
    var output = storage[removeNext];
    delete storage[removeNext];
    removeNext++;
    return output;
  }

  someInstance.size = function() {
    if (indexCounter < removeNext) {
      return 0;
    }
    return indexCounter - removeNext;
  };

  return someInstance;
};
// var Queue = function () {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function (value) {
//   };

//   someInstance.dequeue = function () {
//   };

//   someInstance.size = function () {
//   };

//   return someInstance;
// };
