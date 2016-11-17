import test from 'ava';
import validator from './validator'

test('validate empty list', t => {
  let v = validator([])
  t.falsy(v.isQuestionList(), 'is not a valid question list')
  t.falsy(v.isQuestion(), 'is not a question')
})

test('validate list w question', t => {
  let v = validator([{
    name: 'hello'
  }])
  
  t.truthy(v.isQuestionList(), 'is valid question list')
  t.falsy(v.isQuestion(), 'is not a question')
})

test('validate obj question', t => {
  let v = validator([])
  t.falsy(v.isQuestionList(), 'is not a valid question list')
  t.truthy(v.isQuestion(), 'is a question')
})

test('validate obj not a question', t => {
  let v = validator({x: 2})
  t.falsy(v.isQuestionList(), 'is not a valid question list')
  t.falsy(v.isQuestion(), 'is not a question')
})
