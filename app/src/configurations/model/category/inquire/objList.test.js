import test from 'ava';
import objList from './objList';

test('simple question', t => {
  let q = {
    style: {
      name: 'hello'
    }    
  }

  let l = objList(q, {})

  t.is(l.type, 'objList');
  t.is(l.categories, q);
  t.deepEqual(l.keys, ['style']);
  t.deepEqual(l.ctx, {});
});