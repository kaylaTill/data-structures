var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queueInsance = Object.create(queueMethods);
  queueInsance.storage = {};
  queueInsance.indexCounter = 0;
  queueInsance.dequeueNext = 0
  return queueInsance;
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


var queue = Queue();
queue

