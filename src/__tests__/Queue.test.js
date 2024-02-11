const Queue = require("../dsa/Queue.cjs");

test("Queue enqueue adds items to the end", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.peek().value).toBe(1);
  expect(q.dequeue().value).toBe(1);
  expect(q.peek().value).toBe(2);
  expect(q.dequeue().value).toBe(2);
  expect(q.peek().value).toBe(3);
  expect(q.dequeue().value).toBe(3);
  expect(q.peek()).toBeUndefined();
  expect(q.dequeue()).toBeUndefined();
});

test("Queue dequeue removes items from the front", () => {
  const q = new Queue([1,  2,  3]);
  expect(q.dequeue().value).toBe(1);
  expect(q.dequeue().value).toBe(2);
  expect(q.dequeue().value).toBe(3);
  expect(q.dequeue()).toBeUndefined();
});

test("Queue peek does not remove items", () => {
  const q = new Queue([1,  2,  3]);
  expect(q.peek().value).toBe(1);
  expect(q.peek().value).toBe(1);
  expect(q.dequeue().value).toBe(1);
  expect(q.peek().value).toBe(2);
});

test("Queue contains checks for presence of value", () => {
  const q = new Queue([1,  2,  3]);
  expect(q.contains(1)).toBe(true);
  expect(q.contains(4)).toBe(false);
});

test("Queue Symbol.iterator works correctly", () => {
  const q = new Queue([1,  2,  3]);
  const values = [];
  for (const item of q) {
    values.push(item.value);
  }
  expect(values).toEqual([1,  2,  3]);
});
