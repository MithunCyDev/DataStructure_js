// A tree data structure used for storing information about intervals or segments, allowing querying of intervals efficiently.

//Range queries (sum, minimum, maximum) in logarithmic time
//Dynamic array operations

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  build(arr) {
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[i * 2] + this.tree[i * 2 + 1];
    }
  }

  update(index, value) {
    index += this.n;
    this.tree[index] = value;
    while (index > 1) {
      index = Math.floor(index / 2);
      this.tree[index] = this.tree[2 * index] + this.tree[2 * index + 1];
    }
  }

  query(left, right) {
    left += this.n;
    right += this.n;
    let sum = 0;
    while (left < right) {
      if (left % 2 === 1) {
        sum += this.tree[left];
        left++;
      }
      if (right % 2 === 1) {
        right--;
        sum += this.tree[right];
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }
    return sum;
  }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11];
const segTree = new SegmentTree(arr);

console.log(segTree.query(1, 4)); // 15 (3 + 5 + 7)
segTree.update(1, 10);
console.log(segTree.query(1, 4)); // 22 (10 + 5 + 7)
