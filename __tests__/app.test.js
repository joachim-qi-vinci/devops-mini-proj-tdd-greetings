const greet = require('../app')

test('should return "Hello, name" ', () => {
  expect(greet('Bob')).toBe('Hello, Bob')
})

test('should return "Hello, my friend" when name is undefined', () => {
  expect(greet()).toBe('Hello, my friend')
})
