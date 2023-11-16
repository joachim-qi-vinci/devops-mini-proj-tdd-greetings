function greet (name) {
  let language

  if (name === 'en' || name === 'fr' || name === 'nl'|| name === undefined || name === null || name === '') {
    language = name
    return greetWithNoName(language)
  }

  if (Array.isArray(name)) {
    const lastElement = name[name.length - 1]
    if (
      lastElement === 'fr' ||
            lastElement === 'en' ||
            lastElement === 'nl'
    ) {
      language = name[name.length - 1]
      name.splice(name.length - 1)
    }
    return greetWithArray(name, language)
  }

  if (name === name.toUpperCase()) {
    return greetWithUpperCaseName(name)
  }
  return `Hello, ${name}.`
}

function greetWithNoName (language) {
  if (language === 'fr') {
    return 'Bonjour, mon ami.'
  }
  if (language === 'nl') {
    return 'Hallo, mijn vriend.'
  }
  return 'Hello, my friend.'
}

function greetWithUpperCaseName (name, language) {
  let string = ''
  switch (language) {
    case 'fr': string = `BONJOUR, ${name}!`
      break
    case 'nl': string = `HALLO, ${name}!`
      break
    default: string = `HELLO, ${name}!`
  }
  return string
}

function greetWithArray (name, language) {
  const tabWithUpperCase = []
  const tabWithLowerCase = []

  name.forEach((element) => {
    if (element === element.toUpperCase()) {
      tabWithUpperCase.push(element)
    } else {
      tabWithLowerCase.push(element)
    }
  })

  const l = tabWithLowerCase.length - 1
  const L = tabWithUpperCase.length - 1

  if (language === 'nl') {
    return greetWithArrayNL(tabWithLowerCase, tabWithUpperCase, l, L)
  }
  if (language === 'fr') {
    return greetWithArrayFR(tabWithLowerCase, tabWithUpperCase, l, L)
  }

  if (name.length === 1) return `Hello, ${name[0]}.`

  const string =
        'Hello, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' and ' +
        tabWithLowerCase[l] +
        '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' AND HELLO ' +
            tabWithUpperCase.slice(0, L + 1).join(' AND ') +
            '!'
    )
  }
  return (
    string +
        ' AND HELLO ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' AND ' +
        tabWithUpperCase[L] +
        '!'
  )
}

function greetWithArrayFR (tabWithLowerCase, tabWithUpperCase, l, L) {
  if (l < 0 && L === 0) {
    return 'BONJOUR, ' +
    tabWithUpperCase.slice(0, L + 1) +
    '!'
  }
  if (tabWithLowerCase.length === 1) return `Bonjour, ${tabWithLowerCase[0]}.`
  const string =
        'Bonjour, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' et ' +
        tabWithLowerCase[l] +
        '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' ET BONJOUR ' +
            tabWithUpperCase.slice(0, L + 1).join(' ET ') +
            '!'
    )
  }
  return (
    string +
        ' ET BONJOUR ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' ET ' +
        tabWithUpperCase[L] +
        '!'
  )
}

function greetWithArrayNL (tabWithLowerCase, tabWithUpperCase, l, L) {
  if (l < 0 && L === 0) {
    return 'HALLO, ' +
    tabWithUpperCase.slice(0, L + 1) +
    '!'
  }
  if (tabWithLowerCase.length === 1) return `Hallo, ${tabWithLowerCase[0]}.`
  const string =
        'Hallo, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' en ' +
        tabWithLowerCase[l] +
        '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' EN HALLO ' +
            tabWithUpperCase.slice(0, L + 1).join(' EN ') +
            '!'
    )
  }
  return (
    string +
        ' EN HALLO ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' EN ' +
        tabWithUpperCase[L] +
        '!'
  )
}

module.exports = greet
