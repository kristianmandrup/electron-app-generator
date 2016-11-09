<template>
  <section v-md-theme="'default'">
    <toolbar />
    <tabs />
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
