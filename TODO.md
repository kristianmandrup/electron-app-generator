# TODO

## Use VueX store

If a piece of state strictly belongs to a single component, it could be just fine leaving it as local state.
You should weigh the trade-offs and make decisions that fit the development needs of your app.

For a better/simpler way to connect components to Vuex store, use [vuex-connect](https://www.npmjs.com/package/vuex-connect)

```js
import { connect } from 'vuex-connect'
import HelloComponent from './hello-component'

export default connect({
  stateToProps: {
    message: state => state.message
  },

  methodsToEvents: {
    update: ({ commit }, value) => commit('UPDATE_INPUT', value)
  },

  lifecycle: {
    ready: ({ commit }) => {
      fetch(URL)
        .then(res => res.text())
        .then(value => commit('UPDATE_INPUT', value));
    }
  }
})('hello', HelloComponent)
```

Taditional way, using `mapState`

```js
import { mapState } from 'vuex'
  // ...
  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })


  computed: mapState([
    // map this.count to store.state.count
    'count'
  ])

  computed: {
    localComputed () { /* ... */ },
    // mix this into the outer object with the object spread operator
    ...mapState({
      // ...
    })
  }
```

### Getters

Use store [getterts](https://vuex.vuejs.org/en/getters.html) as computed properties on global state.
Map `getters` locally in a component.

```js
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
```

### Choices should be saved in VueX state

When you select from the various inputs, these should be reflected in global state.
Then the configurations should be calculated via `mapState`

