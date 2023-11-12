function greet (name) {
  if (name === '') {
    return 'Hello, my friend'
  }
  return 'Hello, ' + (name !== undefined && name !== null ? name : 'my friend')
}

module.exports = greet
