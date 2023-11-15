const greet = require('../app')

test('should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')
})

test('should return "Hello, my friend." when name is undefined', () => {
  expect(greet()).toBe('Hello, my friend.')
})

test('should return "Hello, my friend." when name is null', () => {
  expect(greet(null)).toBe('Hello, my friend.')
})

test('should return "Hello, my friend." when name is an empty string', () => {
  expect(greet('')).toBe('Hello, my friend.')
})

test('should return "HELLO, BOB" when name is equal to BOB', () => {
  expect(greet('BOB')).toBe('HELLO, BOB!')
})

test('should return "HELLO, TOTO" when name is equal to TOTO', () => {
  expect(greet('TOTO')).toBe('HELLO, TOTO!')
})

test('should return "Hello, Jill and Jane."', () => {
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})

test('should return "Hello, Amy, Brian and Charlotte"', () => {
  expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
    'Hello, Amy, Brian and Charlotte.'
  )
})

test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})
