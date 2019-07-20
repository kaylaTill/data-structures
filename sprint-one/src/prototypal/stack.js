var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    var stackInstance = Object.create(Stack.prototype);
    stackInstance.storage = {};
    stackInstance.index = 0;
    return stackInstance;
};

var stackMethods = {}

stackMethods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};
stackMethods.pop = function () {
  this.index--;
  return this.storage[this.index];
  delete this.storage[this.index];
};

stackMethods.size = function () {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};




