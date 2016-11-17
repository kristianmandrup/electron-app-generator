import test from 'ava';
import single from './single';

test('simple question', t => {
  let q = {
    name: 'hello'    
  }

  let l = single(q, {})

  t.is(l.type, 'single');
  t.is(l.q, q);
  t.deepEqual(l.ctx, {});
});