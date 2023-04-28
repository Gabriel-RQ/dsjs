import { Node } from "../Node/node.js";

/**
 * A Stack is a dynamic data structure that follows the LIFO (Last In, First Out) principle.
 * This implementation uses a Linked List node.
 */
export class Stack<T> {
  private head: Node<T> | null;

  constructor(data?: T) {
    if (!data) this.head = null;
    else this.head = new Node<T>(data);
  }

  /**
   * Pushes data into the end of the  Stack.
   */
  push(data: T) {
    const n = new Node(data);

    if (!this.head) {
      this.head = n;
      return;
    }

    const aux = this.head;
    this.head = n;
    this.head.next = aux;
  }

  /**
   * Removes the last element from the Stack and returns it.
   */
  pop() {
    if (!this.head) return;

    const tmp = this.head;

    this.head = this.head.next;

    return tmp.data;
  }

  /**
   * Returns the last element of the stack, without removing it.
   */
  peek() {
    return this.head?.data;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }
}
