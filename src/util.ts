export class Node<T> {
  public next: Node<T> | null;

  constructor(public data: T) {
    this.next = null;
  }
}
