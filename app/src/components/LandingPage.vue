<template>
  <section v-md-theme="'default'">
    <toolbar :refs="$refs" />
    <router-view></router-view>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-subheader>Configurations</md-subheader>
        <md-list-item v-for="(config, key) in configurations">
          <router-link :to="{name: 'configurations', params: {id: key}}">
            <md-icon>{{ config.icon }}</md-icon> <span>{{ config.label }}</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </section>
</template>

<script>
import Toolbar from './Toolbar'
import ButtonTabs from './ButtonTabs'

import configurations from '../configurations'

export default {
  name: 'landing-page',
  components: {
    Toolbar,
    ButtonTabs
  },
  data () {
    return {
      configurations
    }
  }
}
</script>
<style>
</style>
