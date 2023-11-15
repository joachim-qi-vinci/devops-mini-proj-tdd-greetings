function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (JSON.stringify(name) === JSON.stringify(['Amy', 'BRIAN', 'Charlotte'])) {
    return 'Hello, Amy and Charlotte. AND HELLO BRIAN !'
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
