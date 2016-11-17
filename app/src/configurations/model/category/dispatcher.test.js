import test from 'ava';
import dispatcher from './dispatcher'

test('create dispatcher', t => {
  let q = {
    name: 'hello'
  }

  let d = dispatcher(q, {})
  t.truthy(d.resolved, 'resolved ok')
})
