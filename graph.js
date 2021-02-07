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
    root.visited = true;
    if (root.data === data) {
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
    console.log(this.data);
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.addAdjacent(node2);
node2.addAdjacent(node3);

const graph = new Graph([node1, node2, node3]);

console.log(graph.searchDFS(node1, 3));
