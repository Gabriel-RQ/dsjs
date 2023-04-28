import { LinkedList } from "./LinkedList/LinkedList.js";

function profile(c: () => any) {
  const t1 = new Date().getTime();
  c();
  const t2 = new Date().getTime();

  return t2 - t1;
}

const list = new LinkedList<number>();
const arr = new Array();
const set = new Set();
const map = new Map();

console.log("Inserção de 10 milhões de números.");

console.log("Lista encadeada / Push:");
console.log(
  profile(() => {
    for (let i = 1; i < 10_000_000; i++) list.push(i);
  }),
  "ms"
);

list.clear();

console.log("Array / push:");
console.log(
  profile(() => {
    for (let i = 1; i < 10_000_000; i++) arr.push(i);
  }),
  "ms"
);

console.log("Set / add:");
console.log(
  profile(() => {
    for (let i = 1; i < 10_000_000; i++) set.add(i);
  }),
  "ms"
);

set.clear();

console.log("Map / set:");
console.log(
  profile(() => {
    for (let i = 1; i < 10_000_000; i++) map.set(i, i);
  }),
  "ms"
);

map.clear();
