import test from 'ava';
import resolve from './resolver'

test('create resolver', t => {
  let r = resolver([], {})
  let valid = r.validator.isQuestionList()

  t.true(valid, 'is valid list');
  t.deepEqual(r.value, []);
  t.deepEqual(r.ctx, {});
});


test('resolve resolver', async t => {
  let r = resolve([], {})
  let resolved = await r.resolve()
  t.truthy(resolve)
})