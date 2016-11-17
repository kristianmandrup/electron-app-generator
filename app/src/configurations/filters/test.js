export default {
  unit: {
    ava: {
      modules: ['ava', 'ava-spec'],
      scripts: {
        test: 'ava'
      }
    },
    mocha: {
      modules: ['mocha', 'mocha-spec'],
      scripts: {
        test: 'mocha'
      }
    }
  }
}
