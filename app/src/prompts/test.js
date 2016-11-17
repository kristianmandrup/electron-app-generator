export default [{
  type: 'list',
  name: 'unit',
  choice: 'ava',
  choices: [{
    label: 'Ava',
    value: 'ava'
  }, {
    label: 'Mocha',
    value: 'mocha'
  }],
  message: 'Test library'
}, {
  name: 'testdouble',
  type: 'checkbox',
  message: 'Test double libraries',
  choices: ['sinon', 'testdouble'],
  default: ['testdouble']
}, {
  type: 'radio',
  name: 'graphql',
  choices: [{
    label: 'Apollo',
    value: 'apollo'
  }, {
    label: 'Relay',
    value: 'relay'
  }],
  message: 'GraphQL client?'
}]
