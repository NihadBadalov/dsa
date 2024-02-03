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
    * Same thing as append(...)
   * @param {any} e
   */
  push(e) { append(e) }

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
   * @param {any} val Value to search index of
   * @returns {number} If found, element of index; otherwise, -1
   */
  indexOf(val) {
    let i = 0;
    for (const e of this) {
      if (val === e) return i;
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
    let i = 0;
    for (const e of this) {
      if (i === ind) return e;
      i++;
    }
    return undefined;
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

  /** @returns {Node | undefined} */
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
      if (current === this.head) return;
    }
  }

  toString() {
    const elements = [];
    for (const e of this) {
      elements.push(typeof e.value === 'string' ? `'${e.value}'` : e.value);
    }
    return elements.join(', ');
  }
}

module.exports = LinkedList;
