class Node {
  value = undefined;
  next = undefined;
  previous = undefined;

  /**
   * @param {any} value 
   * @param {Node | undefined} next 
   * @param {Node | undefined} previous 
   */
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  head = undefined;
  length = 0;

  constructor(iterator) {
    if (!iterator) return;

    try {
      for (const e of iterator) {
        this.append(e);
      }
    } catch (e) { }
  }

  /**
    * Adds an element to the end of Linked List
   * @param {any} e
   */
  append(e) {
    if (!this.head) {
      const node = new Node(e);
      node.next = node;
      node.previous = node;
      this.head = node;
      this.length = 1;
      return;
    }

    const node = new Node(e, this.head, this.head.previous);
    this.head.previous.next = node;
    this.head.previous = node;
    this.length++;
  }

  /**
    * Adds element to the beginning of Linked List
   * @param {any} e 
   */
  prepend(e) {
    if (!this.head) {
      const node = new Node(e);
      node.next = node;
      node.previous = node;
      this.head = node;
      this.length = 1;
      return;
    }

    const node = new Node(e, this.head, this.head.previous);
    this.head.previous.next = node;
    this.head.previous = node;
    this.head = node;
    this.length++;
  }

  /**
    * Insert a value at index to Linked List
   * @param {any} val Value to insert
   * @param {number} ind Index to insert the value at
   */
  insert(val, i) {
    const ind = i >= 0 ? i % this.length : this.length - (-i % this.length);

    if (ind === 0) {
      return this.prepend(val);
    }
    if (ind === this.length) {
      return this.append(val);
    }

    const e = this.at(ind);
    if (!e) return this.append(val);

    const node = new Node(val, e, e.previous);
    e.previous.next = node;
    e.previous = node;
    this.length++;
  }

  /**
    * Removes element with index of x
   * @param {number} x Index of x to remove
   */
  remove(i) {
    /** @type {Node | undefined} */
    const e = this.at(i);
    if (!e) return undefined;

    if (this.length === 1) {
      this.head = undefined;
      this.length = 0;
      return e;
    }

    e.previous.next = e.next;
    e.next.previous = e.previous;
    this.length--;

    if (i === 0) {
      this.head = this.head.next === this.head ? undefined : this.head.next;
    }
  }

  /**
   * @param {any} val Value to search index of
   * @returns {number} If found, element of index; otherwise, -1
   */
  indexOf(val) {
    let i = 0;
    for (const e of this) {
      if (val === e.value) return i;
      i++;
    }
    return -1;
  }

  /**
    * Returns element at index n
   * @param {number} n Index
   */
  at(n) {
    const ind = n >= 0 ? n % this.length : this.length - (-n % this.length);
    let i = this.length < 4 ? 0 : (ind < Math.floor(this.length / 2) ? 0 : this.length - 1);
    const side = i === 0 ? 0 : 1;
    /*
      * Removed as it uses more memory than needed
      *
      * for (const e of (i === 0 ? this : this.reversedIterator())) {
      if (i === ind) return e;
      if (side === 0) i++;
      else i--;
    } */

    let current = side === 0 ? this.head : this.head.previous;
    while (current) {
      if (i === ind) return current;
      current = side === 0
        ? current.next
        : current.previous;
      if (side === 0) i++;
      else i--;
    }

    return undefined;
  }

  /** Sort Linked List in place */
  sort() {
    // future Me, sorry. can't be bothered to normally implement this right now
    // at least this is either O(n log n) or O(n) - (not sure what the arr.sort T.Compl. is)
    let elements = [];
    for (const e of this) {
      elements.push(e);
    }
    elements = elements.sort((a, b) => a.value - b.value);

    while (this.length > 0) {
      this.remove(0);
    }

    for (const e of elements) {
      this.append(e.value);
    }
  }

  /** Shuffle Linked List in place */
  shuffle() {
    // future Me, sorry. can't be bothered to normally implement this right now
    // at least this is either O(n log n) or O(n) - (not sure what the arr.sort T.Compl. is)
    let elements = [];
    for (const e of this) {
      elements.push(e);
    }
    elements = ((array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    })(elements);

    while (this.length > 0) {
      this.remove(0);
    }

    for (const e of elements) {
      this.append(e.value);
    }
  }

  /** Reverses Linked List in place */
  reverse() {
    let originalHead = this.head;
    let current = this.head;
    let previous = current?.previous;

    while (current) {
      const next = current.next;
      current.previous = next;
      current.next = previous;
      current = next;
      previous = next.previous;
      if (current === originalHead) break;
    }

    this.head = this.head.next;
  }

  /**
    * Return a random element of Linked List
   * @returns {Node | undefined}
   */
  random() {
    if (!this.length) return undefined;
    const randomIdx = Math.floor(Math.random() * this.length);
    return this.at(randomIdx);
  }

  /** @returns {Node | undefined} */
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
      if (current === this.head) return;
    }
  }

  /** Cycle through Linked List */
  *reverseGenerator() {
    let current = this.head.previous;
    while (current) {
      yield current;
      current = current.previous;
      if (current.next === this.head) return;
    }
  }

  /** Cycle through Linked List */
  *cycle() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  /** Cycle through Linked List */
  *shuffleCycle() {
    while (true) {
      const randomIdx = Math.floor(Math.random() * this.length);
      yield this.at(randomIdx);
    }
  }

  toString() {
    const elements = [];
    for (const e of this) {
      elements.push(typeof e.value === 'string' ? `'${e.value}'` : e.value);
    }
    return elements.join(', ');
  }

  toReversedString() {
    const elements = [];
    for (const e of this.reverseGenerator()) {
      elements.push(typeof e.value === 'string' ? `'${e.value}'` : e.value);
    }
    return elements.join(', ');
  }
}

module.exports = LinkedList;
