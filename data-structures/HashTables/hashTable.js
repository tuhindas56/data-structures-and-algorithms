// Exercise: Implement a Hash Table

class HashTable {
  constructor(size) {
    this.data = new Array(size)
    for (let i = 0; i < this.data.length; i += 1) {
      this.data[i] = []
    }
  }

  #hash(key) {
    let hash = 13
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + key.charCodeAt(i) * 17) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let hash = this.#hash(key)
    let data = this.data[hash]
    if (this.get(key)) {
      this.remove(key)
      data.push([key, value])
    } else {
      data.push([key, value])
    }
  }

  get(key) {
    let hash = this.#hash(key)
    let data = this.data[hash]
    if (!data.length) {
      return
    }
    let item = data.find((value) => value[0] === key)
    if (item) {
      return item[1]
    }
  }

  remove(key) {
    let hash = this.#hash(key)
    let data = this.data[hash]
    let index = data.findIndex((item) => item[0] === key)
    data.splice(index, 1)
  }

  keys() {
    const data = this.data
    const output = []
    for (let i = 0; i < data.length; i += 1) {
      for (let j = 0; j < data[i].length; j += 1) {
        output.push(data[i][j][0])
      }
    }
    if (!output.length) {
      return "Empty!"
    }
    return output
  }
}
