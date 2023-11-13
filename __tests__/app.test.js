const greet = require('../app')

test('should return Hello, [name].', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')
})
