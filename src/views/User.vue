<template>
  <main>
    <form class="formAddResto" @submit.prevent="connectUser">
      <h2>Connexion User</h2>
      <input type="text" class="form-control" placeholder="User" v-model="user.name">
      <button type="submit" class="btn btn-primary buttonForm">Connexion</button>
      <button @click="decoUser" type="button" class="btn btn-primary buttonForm">Déco</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      user: []
    };
  },
  created() {},
  methods: {
    connectUser() {
      if(this.user.name){
        this.$store.state.userRole.name = this.user.name;
        document.cookie = "user="+ this.user.name;
      }
    },
    decoUser() {
      document.cookie = "user=";
      this.$store.state.userRole.name = "";
      this.user.name = "";
    }
  }
};
</script>

<style lang="scss">
.box-name {
  position: relative;
  img {
    position: absolute;
    width: 30px;
    top: -12px;
    right: 40px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 40px;
      top: -15px;
    }
  }
}

.formAddResto {
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald", sans-serif;
  padding: 20px;
  background-color: #003542;
  margin-bottom: 30px;
  h2 {
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    background-color: #f42b65;
    padding: 10px 32px;
    margin-bottom: 5px;
    border-radius: 6px 6px 0 0;
  }
  input {
    margin: 5px;
    padding: 5px 140px 5px 5px;
  }
}

.buttonForm {
  font-family: "Oswald", sans-serif;
  width: 90px;
  margin: 5px;
  background-color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f42b65;
    color: #fff;
  }
}
</style>