var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.indexCounter = 0;
  someInstance.dequeueNext = 0;
  extend(someInstance, queueMethods)
  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.indexCounter] = value;
  this.indexCounter++;
};

queueMethods.dequeue = function () {
  var output = this.storage[this.dequeueNext];
  delete this.storage[this.dequeueNext];
  this.dequeueNext++;
  return output;
}

queueMethods.size = function () {
  if (this.indexCounter < this.dequeueNext) {
    return 0;
  }
  return this.indexCounter - this.dequeueNext
};

var newQueue = new Queue();
newQueue.enqueue('val1');
newQueue.enqueue('val2');
newQueue.enqueue('val3');
newQueue.enqueue('val4');
newQueue.dequeue();
newQueue.dequeue();




