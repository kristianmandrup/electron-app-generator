export default [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
  validate: function (value) {
    if ((/.+/).test(value)) return true
    return 'name is required'
  }
}, {
  type: 'input',
  name: 'name',
  message: 'What is your email?',
  validate: function (value) {
    if ((/.+/).test(value)) return true
    return 'email is required'
  }
}]
