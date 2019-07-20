var Stack = function() {
  var someInstance = {};


  // Use an object with numeric keys to store values

  var storage = {};

    // Implement the methods below
  var index = 0

  someInstance.push = function(value) {
    storage[index] = value;
    index ++;
  };


  someInstance.pop = function() {
    index --;
    return storage[index];
    delete storage[index];
  }


  someInstance.size = function() {
    if (index < 0) {
      return 0;
    }

    return index;
  };

  return someInstance;
};

var test = Stack();
test.push("kay");
test.push("tillman");
test.push('me');
debugger
test.pop();
test.pop();
