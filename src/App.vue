<template>
  <div id="app">
    <Header/>
    <router-view/>
    <h1>Welcome to Tip</h1>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header
  },
  created() {}
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>