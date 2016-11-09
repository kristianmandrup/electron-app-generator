import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  main: 0,
  choices: {}
}

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main--
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main++
  },
  [types.CHOICE] (state, payload) {
    console.log('mutate state', payload.name, payload.choice, payload.choices)
    Vue.set(state.choices, payload.name, payload.choice || payload.choices)
    console.log('state choices', state.choices)
  }
}

export default {
  state,
  mutations
}
