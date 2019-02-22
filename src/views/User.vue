<template>
  <main>
    <form v-if="this.$store.state.userName == ''" class="formAddResto" @submit.prevent="connectUser">
      <h2>Connexion User</h2>
      <input type="text" required class="form-control" placeholder="User" v-model="user.name">
      <input type="password" required class="form-control" placeholder="Pass" v-model="user.pass">
      <button type="submit" class="btn btn-primary buttonForm">Connexion</button>
    </form>
    <button v-if="this.$store.state.userName != ''" @click="decoUser" type="button" class="btn btn-primary buttonForm">Déco</button>
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
      if (this.user.name && this.user.pass) {
        axios
          .get(
            this.$store.state.IP +
              "/api/User/Loggin/" +
              this.user.name +
              "/" +
              this.user.pass
          )
          .then(response => {
            this.$store.state.userStore = response.data;

            document.cookie = "userId=" + this.$store.state.userStore.id;

            //alert(this.$store.state.userStore.userName);
            this.$store.state.userName = this.$store.state.userStore.userName;
          })
          .catch(error => {
            alert("Nop !!!");
          });
      }
    },
    decoUser() {
      //alert("deco !!!");
      document.cookie = "userId=";
      this.$store.state.userStore = [];
      this.$store.state.userName = "";
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