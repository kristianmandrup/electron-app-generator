<template>
  <section class="input-list">
    <div v-for="prompt in category.prompts" class="field-group">
      <prompt-input v-if="is(prompt, 'input')" :prompt="prompt"/>
      <prompt-password v-if="is(prompt, 'password')" :prompt="prompt"/>
      <prompt-confirm v-if="is(prompt, 'confirm')" :prompt="prompt"/>
      <prompt-checkbox v-if="is(prompt, 'checkbox')" :prompt="prompt"/>
      <prompt-radio v-if="is(prompt, 'radio')" :prompt="prompt"/>
      <prompt-list v-if="is(prompt, 'list')" :prompt="prompt"/>
    </div>
  </section> 
</template>
<script>
import * as prompt from './prompt'

export default {
  components: {
    ...prompt
  },
  props: ['category'],
  methods: {
    is (prompt, type) {
      var patt = new RegExp(type)
      if (prompt.type === 'expand' && type === 'list') {
        return true
      }
      return patt.test(prompt.type)
    }
  }
}
</script>
<style>
.input-list {
  text-align: left;
}
</style>