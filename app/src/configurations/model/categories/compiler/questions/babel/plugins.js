const pluginChoices = ['duplicate-keys', 'modules-commonjs', 'syntax-trailing-function-commas', 'async-to-generator', 'transform-exponentiation-operator']

const filters = {  
  _2016_: ['transform-exponentiation-operator'],
  _2017_: ['async-to-generator', 'syntax-trailing-function-commas'] 
}

import { dasherize, humanize } from 'string'

filters.latest = filters._2016_.concat(filters._2017_) 

export const plugins = (ctx = {}) => {
  let filter = filters[ctx.preset] || []
  let choices = pluginChoices.filter(choice => filter.includes(choice))

  let hmChoices = choices.map(choice => humanize(choice)) 

  console.log('choices', choices)
  return {
    name: 'babelPlugins',
    type: 'checkbox',
    message: 'Babel plugins',
    choices: hmChoices,    
    default: hmChoices,
    filter: (v) => {
      return ':' + dasherize(v) // by convention, any return value prefixed with : is a module to be installed!
    }
  }
}
