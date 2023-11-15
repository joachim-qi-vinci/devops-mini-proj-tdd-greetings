function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (Array.isArray(name)) {
    return greetWithArray(name)
  }
  if (name === name.toUpperCase()) {
    return greetWithUpperCaseName(name)
  }
  return `Hello, ${name}.`
}

function greetWithNoName () {
  return 'Hello, my friend.'
}

function greetWithUpperCaseName (name) {
  return `HELLO, ${name}!`
}

function greetWithArray (name) {
  const tabWithUpperCase = []
  const tabWithLowerCase = []

  name.forEach((element) => {
    if (element === element.toUpperCase()) {
      tabWithUpperCase.push(element)
    } else {
      tabWithLowerCase.push(element)
    }
  })
  const l = tabWithLowerCase.length - 1
  const L = tabWithUpperCase.length
  const string = 'Hello, ' + tabWithLowerCase.slice(0, l).join(', ') + ' and ' + tabWithLowerCase[l] + '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string + ' AND HELLO ' + tabWithUpperCase.slice(0, L).join(' AND ') + '!')
  }
  return string + ' AND HELLO ' + tabWithUpperCase.slice(0, L - 1).join(', ') + ' AND ' + tabWithUpperCase[L - 1] + '!'
}

module.exports = greet
