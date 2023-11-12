function greet (name) {
  return 'Hello, ' + (name !== undefined && name !== null ? name : 'my friend')
}

module.exports = greet
