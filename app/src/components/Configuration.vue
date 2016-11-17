<template>
  <md-list>
    <md-list-item v-for="item in filteredItems">
      <md-icon>move_to_inbox</md-icon> <span>{{ item.name }}</span>
    </md-list-item>
  </md-list>
</template>
<script>
// import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'
import filter from '../configurations/filter'

export default {
  props: ['category'],
  computed: {
    filteredItems () {
      // this.choices
      let choices = this.$store.state.choices
      let filteredChoices = filter.filtered(choices)

      console.log('choices', filteredChoices)
      return this.category.items
      // return this.category.items.filter((item) => {
      //   console.log('item', name)
      //   return this.choices.include(item.name) ? name : null
      // })
    },
    // map state and getters here
    choices () {
      return this.$store.state.choices[this.name]
    },
    name () {
      return this.category.name
    }
  }
}
</script>
