/**
 * A Stack is a dynamic data structure that follows the LIFO (Last In, First Out) principle.
 * This implementation uses an Array, and seems to be the faster one.
 */
export class ArrayStack<T> {
  private stack: T[];

  constructor(data?: T[], private max?: number) {
    this.stack = data ?? [];
  }

  private isFull() {
    return this.stack.length === this.max;
  }

  /**
   * Pushes data into the end of the  Stack. Throws an error if `max` was specified and the stack reached it.
   */
  push(data: T) {
    if (this.isFull()) throw new Error("Stack is full!");
    this.stack.push(data);
  }

  /**
   * Removes the last element from the Stack and returns it.
   */
  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Returns the last element of the stack, without removing it.
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Clears the Stack.
   */
  clear() {
    this.stack = [];
  }
}
