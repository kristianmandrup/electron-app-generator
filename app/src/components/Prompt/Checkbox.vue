<template>
  <div>
    <md-checkbox
      v-for="choice in prompt.choices"
      :name="choice.name"
      :id="choice.name"
      class="md-primary"
      @change="chosen"
      @input="chosen"
      v-model="colors[choice.name]">{{ choice.label }}</md-checkbox>
  </div>
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
      colors: {}
    }
  },
  methods: {
    chosen (value, $event) {
      let el = $event.srcElement.querySelector('input[type="checkbox"]')
      let choice = {[el.name]: value}
      console.log('checkbox value', value, el, choice, this.colors)
      this.$store.dispatch('choice', this.colors)
    }
  }
}
</script>
