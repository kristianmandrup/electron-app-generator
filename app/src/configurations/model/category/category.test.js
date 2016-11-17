import test from 'ava';
import category from './'
import categories from '../categories'

test('create category', t => {
  console.log('categories', categories)
  let c = category(categories)
  t.deepEqual(c.answers, {}, 'empty answers')
  t.is(c.q.length, 2, 'some categories')
})
