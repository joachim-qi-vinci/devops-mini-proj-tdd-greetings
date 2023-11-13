function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`
  }

  return `Hello, ${name}.`
}

function greetWithNoName () {
  return 'Hello, my friend.'
}

module.exports = greet
