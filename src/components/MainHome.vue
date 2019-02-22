<template>
  <main>
    <!-- SECTION Barre de recherche -->
    <section class="search-wrap">
      <!-- Zone de recherche -->
      <div class="search-box">
        <form @submit.prevent="searchResto" class="contact__wrapper__form">
          <input
            class="search"
            type="text"
            name="search"
            id="search"
            required
            placeholder="Rechercher"
            v-model="inputResto"
          >
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </section>
    <!-- Barre trier par -->
    <section class="tri-wrap">
      <span>
        Trier par
        <i class="fas fa-angle-down"></i>
      </span>
    </section>
    <!-- SECTION Liste de restaurants -->
    <!-- <section class="list-resto">
      <RestoList :restos="restos"/>
    </section> -->
    <router-link :to="'/user/'">
      <section class="box-buttons-cat">
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/pizza-hp.jpg" alt="profile icone">
          <h2>Pizza</h2>
        </div>
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/burger.jpg" alt="profile icone">
          <h2>Burger</h2>
        </div>
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/asiatique.jpg" alt="profile icone">
          <h2>Asiatique</h2>
        </div>
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/sushi.jpg" alt="profile icone">
          <h2>Sushi</h2>
        </div>
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/taco.jpg" alt="profile icone">
          <h2>Taco</h2>
        </div>
        <div class="box-one-button">
          <img class="icone" src="@/assets/img/vege.jpg" alt="profile icone">
          <h2>Végétarien</h2>
        </div>

      </section>
    </router-link>
  </main>
</template>

<script>
import RestoList from "../components/RestoList.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      restos: [],
      inputResto: ""
    };
  },
  components: {
    RestoList
  },
  created() {
    axios
      .get(this.$store.state.IP + "/api/Restaurants/1-50")
      .then(response => {
        this.restos = response.data;
      });
  },
  methods: {
    searchResto() {
      this.$router.push("/search/11/" + this.inputResto);
    }
  }
};
</script>

<style lang="scss">
  .box-buttons-cat{
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 20px 0;
    .box-one-button{
      background-color: #003542;
      margin: 10px;
      border-radius: 0 0 12px 12px;
      img{
        width: 300px;
      }
      h2{
        color: #fff;
        text-align: center;
        margin: 5px 0 10px;
      }  
    }
  }
</style>
