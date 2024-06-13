// Linked lists provide flexibility over arrays by allowing easy insertion and deletion of nodes without reorganizing the entire structure, though they typically have slower access times for individual elements compared to arrays due to the lack of direct indexing.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node by value
  remove(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current !== null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    if (current !== null) {
      previous.next = current.next;
    }
  }

  // Display the list
  display() {
    if (this.head === null) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 -> 20 -> 30 -> null

list.remove(20);
list.display(); // Output: 10 -> 30 -> null

list.remove(10);
list.display(); // Output: 30 -> null

list.remove(30);
list.display(); // Output: The list is empty.
