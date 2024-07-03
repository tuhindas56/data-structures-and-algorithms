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
  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length) {
      currentNode = queue.shift()
      list.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }

  breadthFirstSearchRecursive(queue = [this.root], list = []) {
    if (!queue.length) {
      return list
    }
    const currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchRecursive(queue, list)
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.time("Iterative")
console.log("BFS", tree.breadthFirstSearch())
console.timeEnd("Iterative")
console.time("Recursive")
console.log("BFS", tree.breadthFirstSearchRecursive([tree.root], []))
console.timeEnd("Recursive")
