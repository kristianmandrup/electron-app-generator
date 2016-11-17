import * as types from '../mutation-types'
import Vue from 'vue'

const state = {
  choices: {}
}

const mutations = {
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
