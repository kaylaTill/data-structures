// StackMaker method
var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  extend(someInstance, stackMethods)
  return someInstance;
};


//extend method

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};
stackMethods.pop = function() {
  this.index--;
  return this.storage[this.index];
  delete this.storage[this.index];
}

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
}
var stack = new Stack();
