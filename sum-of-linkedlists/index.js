/**
 * Ref - https://www.algoexpert.io/questions/Sum%20of%20Linked%20Lists
 * Input
 *  L1 2 -> 4 -> 7 -> 1
 *  L2 9 -> 4 -> 5
 * OUtput = 1 -> 9 -> 2 -> 2
 */

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const sumListHead = new LinkedList(0);
  let current = sumListHead;

  let first = linkedListOne;
  let second = linkedListTwo;
  let carry = 0;

  while (first || second || carry !== 0) {
    const val1 = first ? first.value : 0;
    const val2 = second ? second.value : 0;
    const sum = val1 + val2 + carry;

    const data = sum % 10;
    const newNode = new LinkedList(data);
    current.next = newNode;
    current = newNode;
    carry = Math.floor(sum / 10);

    first = first ? first.next : null;
    second = second ? second.next : null;
  }

  return sumListHead.next;
}
