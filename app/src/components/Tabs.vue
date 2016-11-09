<template>
  <md-tabs>
    <md-tab :id="name" :md-label="category.label" v-for="(category, name) in categories">
      <wizard :category="category" />
    </md-tab>
  </md-tabs>
</template>
<script>
import Wizard from './Wizard'
import categories from '../prompts'

export default {
  components: {
    Wizard
  },
  data () {
    return {
      categories
    }
  }
}
</script>
