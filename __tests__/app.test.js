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

test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN !"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})

test('should return "Bonjour, Jill et Jane."', () => {
  expect(greet(['Jill', 'Jane', 'fr'])).toBe('Bonjour, Jill et Jane.')
})

test('should return "Hallo, Jill en Jane."', () => {
  expect(greet(['Jill', 'Jane', 'nl'])).toBe('Hallo, Jill en Jane.')
})

test('should return "Hallo, Nathalie en Jane."', () => {
  expect(greet(['Nathalie', 'nl', 'Jane'])).toBe('Hallo, Nathalie en Jane.')
})

test('should return "Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!"', () => {
  expect(greet(['fr', 'Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!'
  )
})

test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN !"', () => {
  expect(greet(['Amy', 'en', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})

test('should return "Bonjour, Bob."', () => {
  expect(greet(['Bob', 'fr'])).toBe('Bonjour, Bob.')
})

test('should return "Hallo, Bob."', () => {
  expect(greet(['Bob', 'nl'])).toBe('Hallo, Bob.')
})
