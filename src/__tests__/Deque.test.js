const Deque = require("../dsa/Deque.cjs");

test('Initializes an empty deque', () => {
  const deque = new Deque();
  expect(deque.size()).toBe(0);
});

test('Enqueues items to the front of the deque', () => {
  const deque = new Deque();
  deque.enqueueFront('front');
  expect(deque.front()).toBe('front');
});

test('Enqueues items to the rear of the deque', () => {
  const deque = new Deque();
  deque.enqueueRear('rear');
  expect(deque.rear()).toBe('rear');
});

test('Dequeues items from the front of the deque', () => {
  const deque = new Deque();
  deque.enqueueFront('front');
  deque.enqueueRear('rear');
  expect(deque.dequeueFront()).toBe('front');
});

test('Dequeues items from the rear of the deque', () => {
  const deque = new Deque();
  deque.enqueueFront('front');
  deque.enqueueRear('rear');
  expect(deque.dequeueRear()).toBe('rear');
});

test('Checks if an element exists in the deque', () => {
  const deque = new Deque(['one', 'two', 'three']);
  expect(deque.contains('two')).toBe(true);
});

test('Iterates over the deque', () => {
  const deque = new Deque(['one', 'two', 'three']);
  const values = [];
  for (const value of deque) {
    values.push(value);
  }
  expect(values).toEqual(['three', 'two', 'one']);
});
