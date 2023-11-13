function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (Array.isArray(name) && name.length <= 2) {
    return greetWithArrayOf2(name)
  }
  if (Array.isArray(name) && name.length > 2) {
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

function greetWithArrayOf2 (name) {
  return 'Hello, ' + name.join(' and ') + '.'
}

function greetWithArray (name) {
  return 'Hello, ' + name[0] + ', ' + name[1] + ' and ' + name[2] + '.'
}

module.exports = greet
