function fibonacciIterative(n) {
  if (n < 0) {
    return "Invalid"
  }
  let fibonacci = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
  }
  return fibonacci[n]
}

function fibonacciRecursive(n) {
  if (n < 0) {
    return "Invalid"
  }
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
