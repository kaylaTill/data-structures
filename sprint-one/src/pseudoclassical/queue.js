
//constructor
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.indexCounter = 0;
  this.dequeueNext = 0;
};
//methods



Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.indexCounter++;
};

Queue.prototype.dequeue = function () {
  var output = this.storage[this.dequeueNext];
  delete this.storage[this.dequeueNext];
  this.dequeueNext++;
  return output;
}

Queue.prototype.size = function () {
  if (this.indexCounter < this.dequeueNext) {
    return 0;
  }
  return this.indexCounter - this.dequeueNext
};

var queue = new Queue();

