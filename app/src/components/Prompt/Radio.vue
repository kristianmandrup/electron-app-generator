<template>
  <div>
    <md-radio v-for="choice in prompt.choices" :name="prompt.name" class="md-primary" :md-value="choice.value" v-model="value">{{ choice.label }}</md-radio>
  </div> 
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
      value: ''
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
