<template>
  <div class="box-icone">
    <router-link class="user-name" :to="'/user/'">{{this.$store.state.userName}}</router-link>
    <router-link :to="'/user/'">
      <img class="icone" src="@/assets/img/profile-icone.png" alt="profile icone">
    </router-link>
    <img class="icone" src="@/assets/img/coeur-icone.png" alt="mes favoris">
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .user-name{
      position: absolute;
      top: 60px;
      right: 46px;
      color: #f42b65;
      font-family: "Oswald", sans-serif;
    }
</style>