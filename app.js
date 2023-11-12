function greet (name) {
  return 'Hello, ' + (name !== undefined ? name : 'my friend')
}

module.exports = greet
