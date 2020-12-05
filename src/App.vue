<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'App',

  mounted () {
    this.handleAuthStateChanged()
  },

  methods: {
    ...mapActions('user', ['handleAuthStateChanged'])
  },
}
</script>

<style lang="scss">
.bg-dark-grey {
  background: #12171f;
}
.bg-dark-1 {
  background: #191f2e;
}
.bg-dark-2 {
  background: #131822;
}
</style>
