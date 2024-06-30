class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    this.adjacentList[node] = []
    this.numberOfNodes += 1
  }

  addEdge(node1, node2) {
    if (node1 in this.adjacentList && node2 in this.adjacentList) {
      if (!(this.adjacentList[node1].includes(node2) && this.adjacentList[node2].includes(node1))) {
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
      }
    }
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ""
      let vertex
      for (vertex of nodeConnections) {
        connections += vertex + " "
      }
      console.log(node + "-->" + connections)
    }
  }
}
