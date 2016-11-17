<template>
  <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <span style="flex: 1;"></span>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>
    </div>

    <div class="md-toolbar-container">
      <h2 class="md-title">DevEnv configurator</h2>

      <md-button class="md-fab md-fab-bottom-right">
        <router-link :to="{name: 'home'}">
          <md-icon>add</md-icon>
        </router-link>
      </md-button>
    </div>
  </md-toolbar>
</template>
<script>
export default {
  props: ['refs'],
  methods: {
    toggleLeftSidenav () {
      this.refs.leftSidenav.toggle()
    }
  }
}
</script>