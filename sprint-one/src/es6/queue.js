class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.indexCounter = 0;
    this.dequeueNext = 0;
  }
  enqueue(value) {
    this.storage[this.indexCounter] = value;
    this.indexCounter++;
  };

  dequeue() {
    var output = this.storage[this.dequeueNext];
    delete this.storage[this.dequeueNext];
    this.dequeueNext++;
    return output;
  }

  size() {
    if (this.indexCounter < this.dequeueNext) {
      return 0;
    }
    return this.indexCounter - this.dequeueNext;
  };
}

var myQueue = new Queue();

// debugger
// var queue = new Queue();
// queue.enqueue('val1');
// queue.enqueue('val2');
// queue.enqueue('val3');
// queue.enqueue('val4');
// queue.dequeue();
// queue.dequeue();
