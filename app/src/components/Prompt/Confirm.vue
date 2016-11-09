<template>
  <md-switch :name="prompt.name" class="md-primary" v-model="value">{{ prompt.message }}</md-switch> 
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
      value: this.prompt.default
    }
  },
  watch: {
    value: function (newValue) {
      console.log('watched confirm change', newValue)
      this.$store.dispatch('choice', {name: this.prompt.name, choice: this.value})
    }
  }
}
</script>