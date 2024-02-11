const LinkedList = require("./LinkedList.cjs");

class Deque {
  #ll = new LinkedList();

  constructor(iterator) {
    if (!iterator) return;

    try {
      for (const e of iterator) {
        this.enqueueFront(e);
      }
    } catch(e) {
      console.error('Error occurred while iterating the iterator: ', e);
    }
  }

  size() {
    return this.#ll.length;
  }

  front() {
    return this.#ll.at(0)?.value;
  }

  rear() {
    return this.#ll.at(-1)?.value;
  }

  enqueueFront(value) {
    this.#ll.prepend(value);
  }

  enqueueRear(value) {
    this.#ll.append(value);
  }

  dequeueFront() {
    return this.#ll.remove(0)?.value;
  }

  dequeueRear() {
    return this.#ll.remove(-1)?.value;
  }

  contains(value) {
    return this.#ll.indexOf(value) !== -1;
  }

  *[Symbol.iterator]() {
    let current = this.dequeueFront();
    while (current) {
      yield current;
      current = this.dequeueFront();
    }
  }
}

module.exports = Deque;
