function inOrderTraversal(node) {
  if (node.left) {
    inOrderTraversal(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  console.log(node.data);
  if (node.left) {
    inOrderTraversal(node.left);
  }
  if (node.right) {
    inOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if (node.left) {
    inOrderTraversal(node.left);
  }
  if (node.right) {
    inOrderTraversal(node.right);
  }
  console.log(node.data);
}

function breadthFirst(node) {
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    console.log(node.data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);
const seventh = new Node(7);
root.left = second;
root.right = third;
second.left = fourth;
second.right = fifth;
third.left = sixth;
third.right = seventh;

console.log(`inOrderTraversal`);
inOrderTraversal(root);

console.log(`preOrderTraversal`);
preOrderTraversal(root);

console.log(`postOrderTraversal`);
postOrderTraversal(root);

console.log(`breadth first or in level`);
breadthFirst(root);
