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
      <router-link class="nav-a" to="/">Home</router-link>|
      <router-link class="nav-a" to="/user">User</router-link>|
      <router-link v-if="!this.$store.state.userName == ''" class="nav-a" to="/addresto">AddResto</router-link>
    </div>
  </header>
</template>

<script>
import axios from "axios";

import BoxUser from "../components/BoxUser.vue";

export default {
  components: {
    BoxUser
  },
  created() {
    let cookieUser = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieUser) {
      //alert(cookieUser)
      //this.$store.state.userName = cookieUser;
      axios
      .get(
        this.$store.state.IP +
          "/api/Users/" +
          cookieUser
      )
      .then(response => {
        this.$store.state.userStore = response.data;
        this.$store.state.userName = this.$store.state.userStore.userName;
      });
    }
  }
};
</script>

<style lang="scss">
#nav {
  position: absolute;
  top: 0px;
  z-index: 1;
  color:#f42b65;
  a{
    color:#f42b65;
  }
  a.router-link-exact-active {
    color: #003542 !important;
  }
  .nav-a{
    color: #f42b65 !important;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
    margin: 5px;
  }
}
</style>