import filter from '../../app/src/configurations/filter'
import test from 'ava'

// const log = console.log

test('configurations.filter', t => {
  let choices = {
    test: 'ava'
  }

  let filtered = filter.filtered(choices)
  // log('filtered', filtered)
  let hasAva = filtered.test.modules.includes('ava')

  t.true(hasAva, 'contains ava')
})
