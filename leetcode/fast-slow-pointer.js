// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let start = n;
    let slow = n;

    while (true) {
      slow = squareDigit(slow);
      start = squareDigit(squareDigit(start));

      if (slow === start) {
        break;
      }
    }

    return slow === 1;
};

const squareDigit = function (number) {
  let squareResult = 0;
  for (const char of number.toString()) {
    squareResult += Number(char) * Number(char);
  }

  return squareResult;
}






















class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (true) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow.value === null || !fast?.value || fast.value === null) {
      break;
    }

    if (slow.value === fast.value) {
      break;
    }
  }
  return !!fast?.value;
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${hasCycle(head)}`);

