<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container md-has-password :class="{'md-input-invalid': isInvalid}">
      <label>{{ prompt.message }}</label>
      <md-input type="password" :name="prompt.name" :id="prompt.name" v-model="value"></md-input>
      <span v-if="isInvalid" class="md-error">Validation message</span>
    </md-input-container>
  </form> 
</template>
<script>
import debounce from 'lodash.debounce'

export default {
  props: ['prompt'],
  data () {
    return {
      value: '',
      isInvalid: false
    }
  },
  watch: {
    value: function (newValue) {
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: debounce(
      function () {
        this.$store.dispatch('choice', {name: this.prompt.name, choice: this.value})
      }, 500
    )
  }
}
</script>