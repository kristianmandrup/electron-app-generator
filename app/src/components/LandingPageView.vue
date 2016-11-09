<template>
  <section v-md-theme="'default'">
    <div class="md-display-3">App wizard</div>
    <toolbar />
    <tabs />
    <button-tabs />
  </section>
</template>

<script>
import Toolbar from './Toolbar'
import Tabs from './Tabs'
import ButtonTabs from './ButtonTabs'

export default {
  components: {
    Tabs,
    Toolbar,
    ButtonTabs
  },
  name: 'landing-page'
}
</script>
<style>
</style>
