function greet (name) {
  return (
    'Hello, ' +
        (name !== undefined && name !== null && name !== ''
          ? name
          : 'my friend')
  )
}

module.exports = greet
