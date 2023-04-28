/**
 * A Queue is a dynamic data structure that follows the FIFO (First in, First Out) principle.
 * This implementation uses an Array.
 */
export class ArrayQueue<T> {
  private queue: T[];

  constructor(data?: T[]) {
    this.queue = data ?? [];
  }

  /**
   * Puts data to the tail of the Queue.
   */
  enqueue(data: T) {
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
