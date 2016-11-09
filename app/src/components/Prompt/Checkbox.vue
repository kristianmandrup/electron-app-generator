<template>
  <div>
    <md-checkbox v-for="choice in prompt.choices" :name="prompt.name" class="md-primary" v-model="choice.value">{{ choice.label }}</md-checkbox>
  </div> 
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
