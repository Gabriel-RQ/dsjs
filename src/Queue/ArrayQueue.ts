/**
 * A Queue is a dynamic data structure that follows the FIFO (First in, First Out) principle.
 * This implementation uses an Array, and seems to be the faster one.
 */
export class ArrayQueue<T> {
  private queue: T[];

  constructor(data?: T[], private max?: number) {
    this.queue = data ?? [];
  }

  private isFull() {
    return this.queue.length === this.max;
  }

  /**
   * Puts data to the tail of the Queue. Throws an error if `max` was specified and the queue reached it.
   */
  enqueue(data: T) {
    if (this.isFull()) throw new Error("Queue is full!");

    this.queue.push(data);
  }

  /**
   * Removes the head of the Queue and returns it's data.
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * Clears the Queue.
   */
  clear() {
    this.queue = [];
  }
}
