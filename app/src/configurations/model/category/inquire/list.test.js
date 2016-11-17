import test from 'ava';
import list from './list';

test(t => {
  let l = list([], {})

  t.is(l.type, 'list');
  t.deepEqual(l.q, []);
  t.deepEqual(l.ctx, {});
});