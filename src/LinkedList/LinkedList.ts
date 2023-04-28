import { Node } from "../Node/node.js";

/**
 * A Linked List is a simple dynamic data structure that can handle data in nodes.
 */
export class LinkedList<T> {
  private head: Node<T> | null;
  public length = 0;

  constructor(data?: T) {
    if (!data) this.head = null;
    else this.head = new Node<T>(data);
  }

  /**
   * Inserts data at the start of the list.
   */
  push(data: T) {
    const n = new Node<T>(data);
    n.next = this.head;
    this.head = n;

    this.length++;
  }

  /**
   * Inserts data at the end of the list.
   */
  append(data: T) {
    const n = new Node(data);
    n.next = null;

    let aux = this.head;

    if (!aux) {
      this.head = n;
      this.length++;
      return;
    }

    while (aux.next) aux = aux.next;

    aux.next = n;
    this.length++;
  }

  /**
   * Deletes a node from the list. `cmp` is a callback that gets the current iteration's node data as an argument.
   */
  delete(cmp: (d: T) => boolean) {
    let aux: Node<T> | null = this.head;
    let prev = null;

    while (aux && !cmp(aux.data)) {
      prev = aux;
      aux = aux.next;
    }

    if (!aux) return;

    // If node to remove is the first
    if (!prev) {
      this.head = aux.next;
      this.length--;
    } else {
      prev.next = aux.next;
      this.length--;
    }
  }

  /**
   * Deletes the first node where `data` equals to `key`.
   */
  deleteNode(key: T) {
    if (!this.head) return;

    let aux: Node<T> | null = this.head;
    let prev = null;

    if (aux.data === key) {
      this.head = aux.next;
      this.length--;
      return;
    }

    while (aux && aux.data !== key) {
      prev = aux;
      aux = aux.next;
    }

    // if key not found, return
    if (!aux) return;

    // else, key is found, so unlink the node from the List
    // @ts-ignore
    prev.next = aux.next;
    this.length--;
  }

  /**
   * Clears the Linked List.
   */
  clear() {
    this.head = null;
    this.length = 0;
  }

  *[Symbol.iterator]() {
    let aux = this.head;
    while (aux) {
      yield aux.data;
      aux = aux.next;
    }
  }
}
