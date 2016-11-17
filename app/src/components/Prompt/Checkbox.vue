<template>
  <div>
    <md-checkbox
      v-for="choice in prompt.choices"
      :name="prompt.name"
      :id="prompt.name"
      class="md-primary"
      @change="chosen"
      v-model="choice.value">{{ choice.label }}</md-checkbox>
  </div>
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
    }
  },
  methods: {
    chosen (value, $event) {
      let el = $event.srcElement.querySelector('input[type="checkbox"]')
      console.log('checkbox value', value, el)
      this.$store.dispatch('choice', {[el.name]: value})
    }
  }
}
</script>
