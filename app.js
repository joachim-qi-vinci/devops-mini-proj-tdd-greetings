function greet (name) {
  if (name === null) {
    return 'Hello, my friend'
  }
  return 'Hello, ' + (name !== undefined ? name : 'my friend')
}

module.exports = greet
