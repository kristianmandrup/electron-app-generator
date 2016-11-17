function matches (choice, match) {
  if (choice === true) return true
  if (Array.isArray(choice)) {
    if (choice.includes(match)) return true
  }
  if (typeof choice === 'object') {
    if (choice[match]) return true
  }
  return false
}

import filters from './filters'

export default {
  // TODO: generate based on declarative filters
  filter: (choices) => {
    let keys = Object.keys(filters)

    // test, ...
    keys.map((key) => {
      return filters[key].reduce((obj, matcher) => {
        let matchKeys = Object.keys(matcher)
        for (let mk of matchKeys) {
          if (matches(choices[key], mk)) {
            obj[key] = matcher[mk]
          }
          return obj
        }
      }, {})
    })
  }
}
