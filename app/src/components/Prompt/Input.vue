<template>
  <form novalidate @submit.stop.prevent="submit">
    <input type="checkbox" @click="onChange($event)" v-model="myVal"/>
    <md-input-container :class="{'md-input-invalid': isInvalid}">
      <label>{{ prompt.message }}</label>
      <md-input :name="prompt.name" v-model="value" value="prompt.default"></md-input>
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
      myVal: '',
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
    onChange (event) {
      console.log(event)
    },
    getAnswer: debounce(
      function () {
        this.$store.dispatch('choice', {name: this.prompt.name, choice: this.value})
      }, 500
    )
  }
}
</script>