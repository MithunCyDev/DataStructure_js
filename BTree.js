//  A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.

//Databases and file systems (e.g., MySQL, NTFS)
//Indexing large amounts of data

class BTreeNode {
  constructor(t) {
    this.t = t; // Minimum degree
    this.keys = [];
    this.children = [];
    this.leaf = true;
  }

  traverse() {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) {
        this.children[i].traverse();
      }
      console.log(this.keys[i]);
    }
    if (!this.leaf) {
      this.children[i].traverse();
    }
  }
}

class BTree {
  constructor(t) {
    this.t = t;
    this.root = new BTreeNode(t);
  }

  traverse() {
    if (this.root != null) {
      this.root.traverse();
    }
  }
}

// Example usage
const btree = new BTree(3);
btree.root.keys = [10, 20, 30];
btree.root.leaf = true;
btree.traverse(); // Output: 10 20 30
