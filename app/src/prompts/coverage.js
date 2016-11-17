export default [{
  name: 'reports',
  type: 'checkbox',
  message: 'CI servers',
  choices: ['html', 'text', 'text-lcov', 'lcov'],
  default: ['html', 'lcov']
}, {
  name: 'coveralls',
  type: 'confirm',
  message: 'Post coverage to coveralls',
  default: false
}]
