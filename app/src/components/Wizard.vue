<template>
  <section class="input-list field-group">
    <component v-for="prompt in category.prompts" :is="componentType(prompt.type)" :prompt="prompt">
  </section> 
</template>
<script>
import * as prompt from './Prompt'

export default {
  components: {
    ...prompt
  },
  props: ['category'],
  methods: {
    // See https://github.com/vuejs/vue/issues/3270#issuecomment-232263320
    componentType (type) {
      type = ['expand', 'raw-list'].includes(type) ? 'list' : type
      return `prompt-${type}`
    }
  }
}
</script>
<style>
.input-list {
  text-align: left;
}
</style>