const LinkedList = require('./LinkedList.cjs');

/**
  * @classdesc Stack implementation that uses Linked List under the hood
  * @class
  */
class Stack {
  /**
    * @type {import('./LinkedList.cjs')}
    * @private
    */
  #ll = new LinkedList();

  get size() {
    return this.#ll.length;
  }

  constructor(iterator) {
    if (!iterator) return;

    try {
      for (const e of iterator) {
        this.#ll.append(e);
      }
    } catch (e) { }
  }

  /**
    * Adds an element to the end of the Stack
   * @param {any} e
   */
  push(e) {
    return this.#ll.append(e);
  }

  /**
    * Deleted the last element of the Stack and returns it
    * @returns {any}
    */
  pop() {
    return this.#ll.remove(-1)?.value;
  }

  /**
   * @param {any} val Value to search index of
   * @returns {number} If found, element of index; otherwise, -1
   */
  indexOf(val) {
    return this.#ll.indexOf(val);
  }

  toString() {
    return this.#ll.toReversedString();
  }
}

module.exports = Stack;
