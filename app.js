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
  const l = name.length - 1
  return 'Hello, ' + name.slice(0, l).join(', ') + ' and ' + name[l] + '.'
}

module.exports = greet
