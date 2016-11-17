export const preset = {
  name: 'preset',
  type: 'list',
  message: 'Babel preset',
  choices: ['2015', '2016', '2017', 'latest', 'env'],
  default: 'travis'
}

export const stage = (ctx = {}) => {
  console.log('stage', ctx)

  return {
    name: 'stage',
    type: 'list',
    message: `Babel preset ${ctx.preset} stage`,
    choices: ['travis', 'circle'],
    default: 'travis'
  }      
}

import moment from 'moment'

const weeksSinceNov2016 = moment().diff('2016-11-01', 'weeks');

export const envTargets = [{
  browsers: {
    name: 'browsers',
    message: `Browsers to target`,
    default: 'last 2 versions'
  },
  chrome: {
    name: 'chrome',
    message: `Chrome browser version`,
    default: 52 + (weeksSinceNov2016 / 6) //we expect a new vrsion approx every 6 weeks
  }
}]