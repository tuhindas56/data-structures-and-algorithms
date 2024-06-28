class Node {
  constructor(value) {
    ;[this.left, this.right] = [null, null]
    this.value = value
  }
}

class BinarySearch {
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
}
