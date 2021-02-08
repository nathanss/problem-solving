class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  searchDFS(root, data) {
    if (root === null) {
      return null;
    }

    root.visit();
    if (root.data === data) {
      this.clearVisits();
      return root;
    }

    for (let adjacent of root.adjacents) {
      if (!adjacent.visited) {
        const result = this.searchDFS(adjacent, data);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  searchBFS(root, data) {
    if (root === null) {
      return null;
    }
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      if (!node.visited) {
        node.visit();
        if (node.data === data) {
          this.clearVisits();
          return node;
        }
        for (let adjacent of node.adjacents) {
          queue.push(adjacent);
        }
      }
    }
    return null;
  }

  clearVisits() {
    for (let node of this.nodes) {
      delete node.visited;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  visit() {
    this.visited = true;
    console.log(this.data);
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.addAdjacent(node2);
node1.addAdjacent(node4);
node2.addAdjacent(node3);

const graph = new Graph([node1, node2, node3, node4]);

console.log(graph.searchDFS(node1, 4));
console.log(graph.searchBFS(node1, 4));
