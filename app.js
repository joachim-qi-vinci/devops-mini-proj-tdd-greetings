function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (Array.isArray(name)) {
    return greetWithArrayOf2(name)
  }
  return `Hello, ${name}.`
}

function greetWithNoName () {
  return 'Hello, my friend'
}

function greetWithArrayOf2 (name) {
  return 'Hello, ' + name.join(' and ') + '.'
}

module.exports = greet
