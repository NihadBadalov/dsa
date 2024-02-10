const Stack = require("../dsa/Stack.cjs");

test('pushes items onto the stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.toString()).toBe('3, 2, 1');
});

test('pops item off the stack', () => {
  const stack = new Stack([1, 2, 3]);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.pop()).toBeUndefined();
});

test('indexes items correctly', () => {
  const stack = new Stack([1, 2, 3]);
  expect(stack.indexOf(2)).toBe(1);
  expect(stack.indexOf(4)).toBe(-1);
});

test('size', () => {
  const stack = new Stack([1, 2, 3]);
  expect(stack.size).toBe(3);
});
