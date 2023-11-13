function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }

  return `Hello, ${name}.`
}

function greetWithNoName () {
  return 'Hello, my friend.'
}

module.exports = greet
