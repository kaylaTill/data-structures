var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    var stackInstance = Object.create(Stack.methods);
    stackInstance.storage = {};
    stackInstance.index = 0;
    return stackInstance;
  };
};

Stack.methods = {}

methods.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};
methods.pop = function () {
  this.index--;
  return this.storage[this.index];
  delete this.storage[this.index];
}

methods.size = function () {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
}




