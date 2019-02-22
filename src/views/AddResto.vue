<template>
  <div>
    <form class="formAddResto" @submit.prevent="addResto">
      <h2>Ajouter un restaurant</h2>
      <input type="text" class="form-control" placeholder="Name" v-model="restoToAdd.name">
      <input type="text" class="form-control" placeholder="address" v-model="restoToAdd.address">
      <input type="text" class="form-control" placeholder="description" v-model="restoToAdd.description">
      <input type="text" class="form-control" placeholder="00" v-model="restoToAdd.phoneNumber">
      <input type="text" class="form-control" placeholder="cookingType" v-model="restoToAdd.cookingType">
      <input type="text" class="form-control" placeholder="schedule" v-model="restoToAdd.schedule">
      <input type="number" class="form-control" placeholder="averageRating" v-model="restoToAdd.averageRating">

      <!-- <textarea class="form-control" placeholder="Comment..." v-model="newQuestion.title"></textarea> -->
      
      <button type="submit" class="btn btn-primary buttonForm">Créer</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      restoToAdd: []
    };
  },
  methods:{
    addResto(){
      axios.post(this.$store.state.IP + "/api/Restaurants/", {"name": this.restoToAdd.name,"address":this.restoToAdd.address,"description":this.restoToAdd.description,"phoneNumber":this.restoToAdd.phoneNumber,"cookingType":this.restoToAdd.cookingType,
      "schedule":this.restoToAdd.schedule,
      "averageRating":this.restoToAdd.averageRating}
      ).then()
    }
  }
};
</script>

<style lang="scss">

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
