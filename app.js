function greet (name) {
  if (name === undefined || name === null || name === '') {
    return greetWithNoName()
  }
  if (Array.isArray(name)) {
    const tab = sortTable(name)
    const language = tab.splice(tab.length - 1, 1)
    return greetWithArray(tab, language)
  }
  if (name === name.toUpperCase()) {return greetWithUpperCaseName(name)}
  /*
  if (language === 'fr') return `Bonjour, ${name}.`
  if (language === 'nl') return `Goeiedag, ${name}.`
  */
  return `Hello, ${name}.`
}

function greetWithNoName () {
  return 'Hello, my friend.'
}

function greetWithUpperCaseName (name) {
  return `HELLO, ${name}!`
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

  if (language === 'fr') { return greetWithArrayFR(tabWithLowerCase, tabWithUpperCase) }

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

function greetWithArrayFR (tabWithLowerCase, tabWithUpperCase) {
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

function sortTable (table) {
  const sortedTab = []
  let language

  table.forEach((element) => {
    if (element !== 'fr' && element !== 'en' && element !== 'nl') {
      sortedTab.push(element)
    }
    language = element
  })
  sortedTab.push(language)
  return sortedTab
}
module.exports = greet
