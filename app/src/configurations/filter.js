import * as filters from './filters'
import merge from 'lodash.merge'

const log = console.log

function matches (choice, match) {
  if (choice === match) return true
  if (Array.isArray(choice) && choice.includes(match)) return true
  if (typeof choice === 'object' && choice[match]) return true
  return false
}

function filter (filters, key, choices) {
  let matchers = filters[key]
  let keys = Object.keys(matchers)

  return keys.reduce((obj, fkey) => {
    obj[key] = {}
    let keyChoices = choices[key]
    let matcher = matchers[fkey]
    let matchKeys = Object.keys(matcher)
    // log('loop', keyChoices, matcher, matchKeys)
    for (let mk of matchKeys) {
      // log('mk', keyChoices, mk)
      if (matches(keyChoices, mk)) {
        // log('matched', mk)
        obj[key] = merge(obj[key], matcher[mk])
      } else {
        // log('NOT matched', mk)
      }
    }
    return obj
  }, {})
}

export default {
  // TODO: generate based on declarative filters
  filtered: (choices) => {
    let keys = Object.keys(filters)
    // test, ...
    return keys.reduce((obj, key) => {
      let f = filters[key] ? filter(filters, key, choices) : choices
      return merge(obj, f)
    }, {})
  }
}
