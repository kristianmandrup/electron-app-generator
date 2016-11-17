export default [{
  type: 'input',
  name: 'name',
  message: 'Name of project',
  validate: function (value) {
    if ((/.+/).test(value)) { return true }
    return 'name is required'
  }
}, {
  type: 'input',
  name: 'version',
  message: 'Version',
  validate: function (value) {
    if ((/.+/).test(value)) { return true }
    return 'name is required'
  },
  default: '0.1.0'
}]
