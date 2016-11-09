<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container md-has-password :class="{'md-input-invalid': isInvalid}">
      <label>{{ prompt.message }}</label>
      <md-input type="password" :name="prompt.name" :id="prompt.name" v-model="prompt.choice"></md-input>
      <span v-if="isInvalid" class="md-error">Validation message</span>
    </md-input-container>
  </form> 
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
      value: '',
      isInvalid: false
    }
  }
}
</script>