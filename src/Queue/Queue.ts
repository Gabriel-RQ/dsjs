import { Node } from "../Node/node.js";

/**
 * A Queue is a dynamic data structure that follows the FIFO (First in, First Out) principle.
 * This implementation uses a Linked List node.
 */
export class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor(data?: T) {
    if (!data) this.tail = null;
    else this.tail = new Node<T>(data);

    this.head = this.tail;
  }

  /**
   * Puts data to the tail of the Queue.
   */
  enqueue(data: T) {
    const n = new Node(data);

    // If Queue is empty, enqueue the first node
    if (!this.tail) {
      this.head = this.tail = n;
      return;
    }

    this.tail.next = n;
    this.tail = n;
  }

  /**
   * Removes the head of the Queue and returns it's data.
   */
  dequeue() {
    if (!this.head) return;

    const tmp = this.head;
    this.head = this.head.next;

    if (!this.head) this.tail = null;

    return tmp.data;
  }

  /**
   * Clears the Queue.
   */
  clear() {
    this.head = null;
    this.tail = null;
  }
}
