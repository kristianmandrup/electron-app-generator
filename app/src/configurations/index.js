export default {
  modules: {
    name: 'modules',
    label: 'Modules',
    icon: 'send',
    items: [{
      mode: 'dev',
      name: 'ava'
    }, {
      mode: 'dev',
      name: 'ava-spec'
    }]
  },
  scripts: {
    name: 'scripts',
    label: 'Scripts',
    icon: 'send',
    items: [{
      name: 'lint'
    }, {
      name: 'test'
    }]
  },
  components: {
    name: 'components',
    label: 'Components',
    icon: 'send',
    items: [{
      name: 'contact list'
    }, {
      name: 'login'
    }]
  }
}
