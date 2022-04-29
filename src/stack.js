const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
stackName = [];
  push(el) {
    this.stackName.push(el);
  }

  pop() {
    return this.stackName.pop();
  }

  peek() {
    return this.stackName[this.stackName.length - 1];
  }
}

module.exports = {
  Stack
};
