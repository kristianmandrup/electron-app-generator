export default [{
  type: 'radio',
  name: 'graphql',
  message: 'GraphQL client?',
  choices: [{
    label: 'Apollo',
    value: 'apollo'
  }, {
    label: 'Relay',
    value: 'relay'
  }],
  default: 'apollo'
}]
