// Exercise: Return first recurring character from an array

function firstRecurringCharacter(array) {
  let map = new Map()
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in map) {
      return array[i]
    }
    map[array[i]] = null
  }
  return undefined
}
