<template>
  <md-switch :name="prompt.name" class="md-primary" v-model="prompt.choice">{{ prompt.message }}</md-switch> 
</template>
<script>
export default {
  props: ['prompt'],
  data () {
    return {
    }
  }
}
</script>