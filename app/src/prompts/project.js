export default [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
  validate: function (value) {
    if ((/.+/).test(value)) { return true }
    return 'name is required'
  }
}, {
  type: 'password',
  name: 'password',
  message: 'What is your secret password?',
  validate: function (value) {
    if ((/.+/).test(value)) { return true }
    return 'password is required'
  }
}, {
  type: 'confirm',
  name: 'wantTacos',
  choice: false,
  message: 'Do you want tacos?'
}, {
  type: 'checkbox',
  name: 'color',
  choices: [{label: 'red', value: false}, {label: 'blue', value: false}],
  message: 'Favorite color?'
}]
