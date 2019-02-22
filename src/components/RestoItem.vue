<template>
  <div class="box-resto-admin">
    <div class="box-resto">
      <div class="resto-name">
        <div class="name">
          <router-link :to="'/restaurant/'+resto.id">
            <h4>{{resto.name}}</h4>
          </router-link>
          <span>-</span>
          <router-link :to="'/restaurant/'+resto.id">
            <h6>{{resto.cookingType}}</h6>
          </router-link>
        </div>
        <div class="note">
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="far fa-circle"></i>
          <i class="far fa-circle"></i>
          <span>(102)</span>
          <img class="coeur" src="@/assets/img/heart-vide.png" alt>
          <img class="coeur hidden" src="@/assets/img/heart-full.png" alt>
        </div>
      </div>
      <div class="resto-horaire">
        <router-link :to="'/restaurant/'+resto.id">
          <h5>Ouvert de {{resto.schedule}} - Fermé : lundi</h5>
        </router-link>
      </div>
      <div class="resto-info">
        <p class="tel">
          <router-link :to="'/restaurant/'+resto.id">{{resto.phoneNumber}}</router-link>
        </p>
        <p>
          <router-link :to="'/restaurant/'+resto.id">{{resto.address}}</router-link>
        </p>
      </div>
    </div>
    <button
      v-if="this.$store.state.userRole.name=='admin'"
      @click="deleteResto(resto.id)"
      type="button"
      class="btn btn-primary buttonHome"
    >Supprimer</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["resto"],
  methods: {
    deleteResto(restoId) {
      let suppr = confirm("Voulez-vous vraiment supprimer le restaurant ?");

      if (suppr) {
        //this.$router.push("/restaurant/"+restoId)
        axios
          .delete(this.$store.state.IP + "/api/Restaurants/" + restoId)
          .then();
      }
    }
  }
};
</script>

<style lang="scss">
.box-resto-admin {
  display: flex;
  .box-resto{
    width: 100%;
  .note{
    i{
      padding-right: 3px;
    }
  }
  }
  .buttonHome {
    font-family: "Oswald", sans-serif;
    height: 50px;
    width: 90px;
    margin: 25px 5px;
    background-color: #003542;
    border: none;
    border-radius: 6px;
    padding: 8px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f42b65;
    }
  }
}
</style>
