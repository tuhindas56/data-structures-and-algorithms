class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    if (value) {
      const node = new Node(value)
      if (!this.length) {
        this.bottom = node
        this.top = node
      } else {
        const previous = this.top

        this.top = node
        this.top.next = previous
      }
      this.length += 1
      return this
    }
    return "Invalid value!"
  }

  pop() {
    if (!this.top) {
      return "Stack is empty."
    }
    if (this.length === 1) {
      this.top = null
      this.bottom = null
    } else {
      this.top = this.top.next
    }
    this.length -= 1
    return this
  }
}
