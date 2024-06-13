/*A collection of nodes (vertices) connected by edges. Can be directed or undirected.*/

//Social networks
//Web page linking
//Network routing
//Dependency resolution

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);

        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    if (visited.has(start)) return;

    visited.add(start);
    console.log(start);

    const neighbors = this.adjacencyList.get(start);
    for (const neighbor of neighbors) {
      this.dfs(neighbor, visited);
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("BFS:");
graph.bfs("A"); // Output: A B C D

console.log("DFS:");
graph.dfs("A"); // Output: A B D C
