const greet = require('../app')

test('should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')
})

test('should return "Hello, my friend" when name is undefined', () => {
  expect(greet()).toBe('Hello, my friend')
})

test('should return "Hello, my friend" when name is null', () => {
  expect(greet(null)).toBe('Hello, my friend')
})

test('should return "Hello, my friend" when name is an empty string', () => {
  expect(greet('')).toBe('Hello, my friend')
})

test('should return "Hello, Jill and Jane."', () => {
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})
