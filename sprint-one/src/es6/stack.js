class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    this.index--;
    return this.storage[this.index];
    delete this.storage[this.index];
  }

  size() {
    if (this.index < 0) {
      return 0;
    }
    return this.index;
  }
}

