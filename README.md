# **_dsjs_**

A Typescript/Javascript implementation of popular Data Structures.<br>

Should i state, this is intended much more as educational content, than an actually useful package.<br>

I implemented this code with my own knowledge and resources from [GeeksForGeeks](https://www.geeksforgeeks.org/).

## Implemented Data Structures

- [LinkedList](./src/LinkedList/)
- [Queue (Node | Array)](./src/Queue/)
- [Stack (Node | Array)](./src/Stack/)

Being `Node` the following class:

```ts
class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T);
}
```

In general, it seems the `Array` implementation is faster than the `Node` one, when available.

## Usage

You can install the package with `npm i @gabrielrq/dsjs`.<br>
Here's an example:

```ts
import {
  LinkedList,
  Queue,
  ArrayQueue,
  Stack,
  ArrayStack,
} from "@gabrielrq/dsjs";

function profile(c: () => any) {
  const t1 = new Date().getTime();
  c();
  const t2 = new Date().getTime();

  console.log(t2 - t1, " ms");
}

function insertData(add: (_: number) => void) {
  for (let i = 0; i < 10_000_000; i++) {
    add(i);
  }
}

const linkedList = new LinkedList<number>();
const queue = new Queue<number>();
const arrQueue = new ArrayQueue<number>();
const stack = new Stack<number>();
const arrStack = new ArrayStack<number>();

console.log("Profile the time taken to insert 10 million entries\n");

console.log("Linked List / Push");
profile(() => insertData(linkedList.push.bind(linkedList))); // 1145 ms

console.log("Queue <Node> / Enqueue");
profile(() => insertData(queue.enqueue.bind(queue))); // 1650 ms

console.log("Queue <Array> / Enqueue");
profile(() => insertData(arrQueue.enqueue.bind(arrQueue))); // 288 ms

console.log("Stack <Node> / Push");
profile(() => insertData(stack.push.bind(stack))); // 1769 ms

console.log("Stack <Array> / Push");
profile(() => insertData(arrStack.push.bind(arrStack))); // 285 ms

linkedList.clear();
queue.clear();
arrQueue.clear();
stack.clear();
arrStack.clear();
```

Note that, the results may vary based on hardware (and other factors, as well), but you can see that the `Array` implementation finishes adding data much faster.
