const greet = require('../app')

test('should return "Hello, name" ', () => {
  expect(greet('Bob')).toBe('Hello, Bob')
})

test('should return "Hello, my friend" when name is undefined', () => {
  expect(greet()).toBe('Hello, my friend')
})

test('should return "Hello, my friend" when name is null', () => {
  expect(greet(null)).toBe('Hello, my friend')
})
