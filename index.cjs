const LinkedList = require("./LinkedList.cjs");

const ll = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log('First element is', ll.at(0));
// console.log('Last element is', ll.at(-1));


ll.reverse();
ll.reverse();
ll.insert('alr', 3);
ll.remove(1);
ll.remove(1);
ll.reverse();

console.log('Unsorted', ll.toString());

ll.sort();

console.log('Sorted', ll.toString());

ll.shuffle();

console.log('Shuffled', ll.toString());
