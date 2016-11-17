export default {
  test: (ctx) => {
    if (ctx.test.includes('ava')) {
      return ['ava', 'ava-spec']
    }
  }
}
