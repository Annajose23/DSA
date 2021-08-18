class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  search(value){
      if(!this.root) return undefined;
        var current = this.root;
        if(current.value === value){
            return current
        }else if(current.value>value){
            current = current.left
        }else{
            current = current.right
        }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(8);
tree.insert(15);
console.log(tree);
