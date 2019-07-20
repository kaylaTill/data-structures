var Stack = function(){
  this.storage = {};
  this.index = 0

};


Stack.prototype.push = function(value) {
 //if my stack is NOT empty: add to the end of my object with and index incremented by 1
 //if my stack is empty: set the index to 0
  this.storage[this.index] = value;
  this.index++;

};

Stack.prototype.size = function () {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
}

Stack.prototype.pop = function () {
  this.index--;
  return this.storage[this.index];
  delete this.storage[this.index];
}

var stack = new Stack();
stack.push("kayla");
stack.push("kayla2");
stack.pop()

// // // console.log(stack);





// // Giraffe.prototype.isTallEnough = function (treeHeight) {
// //   return this.height > treeHeight;
// // };

// // Giraffe.prototype.isHungry = function () {
// //   return this.hunger > 0;
// // };

// // Giraffe.prototype.say = function (option) {
// //   var sentences = {
// //     'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
// //     'notHungry': this.name + ' is not hungry.',
// //     'notTallEnough': this.name + ' is too short to reach the trees.',
// //     'ate': 'That was delicious!'
// //   };

// //   return console.log(sentences[option]);
// // };

// // Giraffe.prototype.eat = function () {
// //   if (this.isHungry()) {
// //     this.hunger -= this.height;
// //     this.say('ate');
// //   } else {
// //     this.say('notHungry');
// //   }
// // };

// // Giraffe.prototype.browse = function () {
// //   if (this.isTallEnough(2)) {
// //     this.eat();
// //   } else {
// //     this.say('notTallEnough')
// //   }
// // };


