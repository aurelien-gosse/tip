<template>
  <header>
    <!-- Header top -->
    <div class="bandeau-blanc">
      <!-- Logo Tip -->
      <img src="@/assets/img/logo.png" alt="logo_de_tip">
      <!-- Icones : profile + favoris -->
      <BoxUser/>
    </div>
    <!-- Header bas -->
    <div class="image-cover">
      <!-- Box-txt: A la recherche... -->
      <div class="txt-box">
        <h1>A la recherche d'un resto tip-top pour ce soir ?</h1>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/user">User</router-link>|
      <router-link to="/addresto">AddResto</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
import BoxUser from "../components/BoxUser.vue";

export default {
  components: {
    BoxUser
  },
  created() {
    let cookieUser = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(cookieUser){this.$store.state.userRole.name = cookieUser}
  }
};
</script>

<style lang="scss">
#nav {
  position: fixed;
  top: 0px;
  z-index: 1;
  background: #f42b65;
  color: white;
  a {
    color: white;
  }
  a.router-link-exact-active {
    color: #003542;
  }
}
</style>