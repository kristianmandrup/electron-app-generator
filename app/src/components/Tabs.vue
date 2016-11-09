<template>
  <section>
    <md-tabs v-for="(category, name) in categories">
      <md-tab :id="name" :md-label="category.label">
        <wizard :category="category" />
      </md-tab>
    </md-tabs>
  </section>
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
