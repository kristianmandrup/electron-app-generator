export default {
  lib: {
    standard: {
      modules: ['standard'],
      scripts: {
        lint: 'standard',
        'lint:fix': 'standard --fix'
      }
    },
    xo: {
      modules: ['xo'],
      scripts: {
        lint: 'xo',
        'lint:fix': 'xo --fix'
      }
    }
  }
}
