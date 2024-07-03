function returnFibonacciFunction() {
  let cache = {}
  return function fib(n) {
    if (n < 0) {
      return "Invalid"
    }
    if (n < 2) return n
    if (n in cache) return cache[n]
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
}

const fib = returnFibonacciFunction()

console.time("uncached")
console.log(fib(8))
console.timeEnd("uncached")

console.time("cached")
console.log(fib(8))
console.timeEnd("cached")
