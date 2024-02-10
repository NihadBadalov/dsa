const LinkedList = require("../dsa/LinkedList.cjs");

test('append', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.append(5);
  expect([...ll].map(node => node.value)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('prepend', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.prepend(5);
  expect([...ll].map(node => node.value)).toStrictEqual([5, 1, 2, 3, 4]);
});

test('insert', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.insert(5, 2);
  expect([...ll].map(node => node.value)).toStrictEqual([1, 2, 5, 3, 4]);
});

test('remove - from start', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.remove(0);
  expect([...ll].map(node => node.value)).toStrictEqual([2, 3, 4]);
});

test('remove - from middle', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.remove(1);
  expect([...ll].map(node => node.value)).toStrictEqual([1, 3, 4]);
});

test('remove - from end', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  ll.remove(3);
  expect([...ll].map(node => node.value)).toStrictEqual([1, 2, 3]);
});

test('indexOf - normaly', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  expect(ll.indexOf(3)).toBe(2);
});

test('indexOf - element not in Linked List', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  expect(ll.indexOf(7)).toBe(-1);
});

test('indexOf - Linked List is empty', () => {
  const ll = new LinkedList([]);
  expect(ll.indexOf(0)).toBe(-1);
});

test('at - linear search from both left and right', () => {
  const ll = new LinkedList([1, 2, 3, 4]);
  expect(ll.at(1).value + ll.at(2).value).toBe(5);
});

test('at - linear search from left', () => {
  const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(ll.at(2).value).toBe(3);
});

test('at - linear search from right', () => {
  const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(ll.at(8).value).toBe(9);
});

test('at - negative', () => {
  const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(ll.at(-1).value).toBe(10);
});

test('at - negative with one element in LL', () => {
  const ll = new LinkedList([20]);
  expect(ll.at(-1).value).toBe(20);
});

test('at - negative > len; with one element in LL', () => {
  const ll = new LinkedList([20]);
  expect(ll.at(-10).value).toBe(20);
});

test('sort', () => {
  const ll = new LinkedList([-2, 2, -3, 1, 2, 0, 1, 1337, Infinity, -Infinity]);
  ll.sort();

  expect(
    [...ll].map(node => node.value)
  ).toStrictEqual([
    -Infinity, -3, -2,
    0, 1, 1, 2, 2,
    1337, Infinity,
  ]);
});

test('shuffle', () => {
  const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  ll.shuffle();
  expect([...ll].map(node => node.value)).not.toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('reverse and reverseGenerator', () => {
  const ll1 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let ll2 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  ll2 = [...ll2.reverseGenerator()].reverse();

  expect([...ll2].map(node => node.value)).toStrictEqual([...ll1].map(node => node.value));
});

test('random', () => {
  const ll = new LinkedList([1337, 1338, 1339, 1440, 1441, 1442]);
  const random = ll.random().value;
  expect([...ll].map(node => node.value)).toContain(random);
});


test('cycle', () => {
  const ll = new LinkedList([1, 2, 3]);
  const elements = [];

  let i = 0;
  for (const e of ll.cycle()) {
    if (i >= 9) break;
    elements.push(e);
    i++;
  }

  expect(elements.map(node => node.value)).toStrictEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('toString', () => {
  const ll = new LinkedList([1, 2, 3]);
  expect(ll.toString()).toMatch(/1, 2, 3/);
});
