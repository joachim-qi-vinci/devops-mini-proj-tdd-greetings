const greet = require('../app')

test('should return bob', () => {
  expect(greet('bob')).toBe('bob')
})
