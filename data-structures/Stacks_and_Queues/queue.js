class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const node = new Node(value)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.length += 1
    return this
  }

  dequeue() {
    if (this.first === this.last) {
      this.first = null
      this.last = null
    }
    if (this.first) {
      this.first = this.first.next
    }
    this.length -= 1
  }
}
