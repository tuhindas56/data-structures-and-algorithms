class Node {
  constructor(value) {
    ;[this.left, this.right] = [null, null]
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value)
    if (this.root) {
      let currentNode = this.root
      while (true) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = node
            return this
          }
          currentNode = currentNode.right
        } else {
          if (!currentNode.left) {
            currentNode.left = node
            return this
          }
          currentNode = currentNode.left
        }
      }
    } else {
      this.root = node
    }
  }

  lookup(value) {
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
    return null
  }
  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }
  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])
  }
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePreOrder(node, list) {
  list.push(node.value)
  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log("BFS", tree.depthFirstSearchPostOrder())
