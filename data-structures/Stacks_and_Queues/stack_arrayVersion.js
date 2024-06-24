class Stack {
  constructor() {
    this.items = []
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  push(value) {
    if (value) {
      this.items.push(value)
      return this.items
    } else {
      return "Invalid value!"
    }
  }

  pop() {
    this.items.pop()
  }
}
