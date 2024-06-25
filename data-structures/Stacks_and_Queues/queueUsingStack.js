class Queue {
  constructor() {
    this.pushStack = []
    this.popStack = []
  }

  enqueue(value) {
    this.pushStack.push(value)
    return this
  }

  dequeue() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack.pop()
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack[this.popStack.length - 1]
  }

  isEmpty() {
    return !this.popStack.length && !this.pushStack.length
  }
}
