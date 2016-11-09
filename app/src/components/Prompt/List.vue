<template>
  <md-input-container>
    <label :for="prompt.name">{{ prompt.name }}</label>
    <md-select :name="prompt.name" :id="prompt.name" v-model="prompt.choice">
      <md-option v-for="choice in prompt.choices" :value="choice.value">{{ choice.label }}</md-option>
    </md-select>
  </md-input-container>
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
