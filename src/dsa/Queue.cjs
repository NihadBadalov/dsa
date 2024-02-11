class Node {
  value = undefined;
  next = undefined;

  /**
   * @param {any} value 
   * @param {Node | undefined} next 
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  front = undefined;
  rear = undefined;
  length = 0;

  constructor(iterator) {
    if (!iterator) return;

    try {
      for (const e of iterator) {
        this.enqueue(e);
      }
    } catch(e) {
      console.error('Error occurred while iterating the iterator: ', e);
    }
  }

  enqueue(value) {
    if (!this.front || !this.rear) {
      const node = new Node(value);
      node.next = node;
      this.front = node;
      this.rear = node;
      this.length = 1;
      return;
    }

    const node = new Node(value);
    node.next = undefined;
    this.rear.next = node;
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.front) {
      return undefined;
    }

    if (this.length === 1) {
      const node = this.front;
      this.front = undefined;
      this.rear = undefined;
      this.length = 0;
      return node;
    }

    const front = this.front;
    this.front = this.front.next;
    this.length--;
    return front;
  }

  peek() {
    return this.front;
  }

  contains(value) {
    let current = this.front;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  *[Symbol.iterator]() {
    let current = this.dequeue();
    while (current) {
      yield current;
      current = this.dequeue();
    }
  }
}

module.exports = Queue;
