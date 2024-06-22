class LinkedList {
  #length = 0

  constructor(value) {
    if (value) {
      this.head = {
        value,
        next: null,
      }
      this.#length += 1
    } else {
      this.head = null
    }
    this.tail = this.head
  }

  append(value) {
    if (this.#length) {
      this.tail.next = {
        value,
        next: null,
      }
      this.tail = this.tail.next
      this.#length += 1
    } else {
      this.head = {
        value,
        next: null,
      }
      this.tail = this.head
      this.#length += 1
    }
  }

  prepend(value) {
    if (this.#length) {
      this.head = {
        value,
        next: this.head,
      }
      this.#length += 1
    } else {
      this.head = {
        value,
        next: null,
      }
      this.tail = this.head
      this.#length += 1
    }
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }
    if (index === this.length) {
      this.append(value)
      return this.printList()
    }
    if (index < 0 || index > this.length) {
      return `Enter a valid index between 0 and ${this.length}`
    }
    let currentNode = this.#getNode(index - 1)
    currentNode.next = {
      value,
      next: currentNode.next,
    }
    this.#length += 1
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined
    }
    if (index === 0) {
      this.head = this.head.next
      this.#length -= 1
      return this.printList()
    }
    let currentNode = this.#getNode(index - 1)
    if (index === this.length - 1) {
      currentNode.next = null
      this.#length -= 1
      return this.printList()
    }
    currentNode.next = currentNode.next.next
    this.#length -= 1
    return this.printList()
  }

  #getNode(index) {
    let currentNode = this.head
    let count = 0
    if (index >= 0 && index <= this.length) {
      while (currentNode !== null) {
        if (count === index) {
          return currentNode
        }
        currentNode = currentNode.next
        count += 1
      }
    } else {
      return null
    }
  }

  printList() {
    let output = []
    let currentNode = this.head
    while (currentNode !== null) {
      output.push(currentNode.value)
      currentNode = currentNode.next
    }
    return output
  }

  get length() {
    return this.#length
  }

  reverse() {
    let firstNode = this.head
    this.tail = this.head
    let nextNode = firstNode.next
    while (nextNode) {
      const temp = nextNode.next
      nextNode.next = firstNode
      firstNode = nextNode
      nextNode = temp
    }
    this.head.next = null
    this.head = firstNode
    return this.printList()
  }
}
