<template>
  <md-list>
    <md-list-item v-for="item in category.items">
      <md-icon>move_to_inbox</md-icon> <span>{{ item.name }}</span>
    </md-list-item>
  </md-list>
</template>
<script>
export default {
  props: ['category']
}
</script>
