<template>
  <md-input-container>
    <label :for="prompt.name">{{ prompt.name }}</label>
    <md-select :name="prompt.name" :id="prompt.name" v-model="prompt.choice">
      <md-option v-for="choice in prompt.choices" :value="value">{{ choice.label }}</md-option>
    </md-select>
  </md-input-container>
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
