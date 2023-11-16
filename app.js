function greet (name) {
  if (name === undefined || name === null || name === '' || name === 'en') {
    return greetWithNoName()
  }

  if (Array.isArray(name)) {
    const tab = sortTable(name)
    const language = tab.splice(tab.length - 1)
    return greetWithArray(tab, language)
  }
  if (name === name.toUpperCase()) return greetWithUpperCaseName(name)
  if (name === 'nl') return 'Hallo, mijn vriend.'
  if (name === 'fr') return 'Bonjour, mon ami.'
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

  if (language[0] === 'nl') {
    return greetWithArrayNL(tabWithLowerCase, tabWithUpperCase, l, L)
  }
  if (language[0] === 'fr') {
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
            tabWithUpperCase.slice(0, L + 1).join(' ET ') +
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
function sortTable (table) {
  const sortedTab = []
  let language

  table.forEach((element) => {
    if (element !== 'fr' && element !== 'en' && element !== 'nl') {
      sortedTab.push(element)
    } else {
      language = element
    }
  })
  sortedTab.push(language)
  return sortedTab
}
module.exports = greet
