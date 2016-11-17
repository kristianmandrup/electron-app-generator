const categories = [
//  'analysis',
//  'bundler',
  'compiler',
  // 'coverage',
  // 'documentation',
  // 'lint',
  // 'style',
  // 'test',
  // 'types',
]

export default categories.reduce((obj, category) => {
  obj[category] = require('./' + category).default
  return obj
}, {})
