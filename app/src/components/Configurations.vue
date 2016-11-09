<template>
  <section id="configurations">
    <div class="md-headline">Configuration</div>
    <md-tabs>    
      <md-tab :id="name" :md-label="category.label" v-for="(category, name) in categories" :md-active="category.active">
        <configuration :category="category" />
      </md-tab>
    </md-tabs>
  </section>
</template>
<script>
import Configuration from './Configuration'

import configurations from '../configurations'

export default {
  components: {
    Configuration
  },
  computed: {
    categories () {
      let id = this.$route.params.id || 'modules'
      configurations[id].active = true
      return configurations
    }
  }
}
</script>
