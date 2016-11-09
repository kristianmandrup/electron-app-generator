<template>
  <div>
    <md-checkbox 
      v-for="choice in prompt.choices" 
      :name="prompt.name"
      :id="prompt.name"
      class="md-primary"
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
  watch: {
    prompt: {
      handler: function (val, oldVal) {
        console.log('watched checkbox change', val.choices)
        this.$store.dispatch('choice', val)
      },
      deep: true
    }
  }
}
</script>
