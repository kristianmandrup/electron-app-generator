import filter from '../../app/src/configurations/filter'
import test from 'ava'

const log = console.log

test('configurations.filter', t => {
  let choices = {
    test: 'ava'
  }

  let filtered = filter.filtered(choices)

  t.true(filtered.modules.includes('ava'), 'contains ava')
})
