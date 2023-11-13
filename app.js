function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (Array.isArray(name)) {
    return greetWithArrayOf2(name)
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

function greetWithArrayOf2 (name) {
  return 'Hello, ' + name[0] + ' and ' + name[1] + '.'
}

module.exports = greet
