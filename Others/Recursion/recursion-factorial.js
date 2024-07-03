function findFactorialRecursive(number) {
  if (number === 0) return 1
  if (number < 0) return "Invalid"
  if (number === 1 || number === 2) return number
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  if (number === 0) return 1
  if (number === 1 || number === 2) return number
  if (number < 0) return "Invalid"
  let result = 1
  for (let i = 2; i <= number; i++) {
    result *= i
  }
  return result
}
