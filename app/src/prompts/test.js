export default [{
  type: 'list',
  name: 'unit',
  choice: 'ava',
  choices: [{label: 'Ava', value: 'ava'}, {label: 'Mocha', value: 'mocha'}],
  message: 'Test library'
}, {
  type: 'raw-list',
  name: 'style',
  choice: 'standard',
  choices: [{label: 'standard', value: 'standard'}, {label: 'xo', value: 'xo'}],
  message: 'Style lint'
}, {
  type: 'expand',
  name: 'UI',
  choice: 'vue2',
  choices: [{label: 'Vue 2', value: 'vue2'}, {label: 'React', value: 'react'}],
  message: 'UI framework?'
}, {
  type: 'radio',
  name: 'graphql',
  choices: [{label: 'Apollo', value: 'apollo'}, {label: 'Relay', value: 'relay'}],
  message: 'GraphQL client?'
}]
