export default [{
  type: 'list',
  name: 'lint',
  message: 'Lint',
  choices: [{
    label: 'standard',
    value: 'standard'
  }, {
    label: 'xo',
    value: 'xo'
  }],
  default: 'standard'
}]
