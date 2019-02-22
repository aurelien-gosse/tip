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
    <RestoList :restos="restos"/>
  </main>
</template>

<script>
import axios from "axios";
import RestoList from "../components/RestoList.vue";

export default {
  name: "app",
  data() {
    return {
      listeAxios: [
        "",
        "api/Restaurants/GetRestaurant/",
        "api/Restaurants/",
        "api/Restaurants/GetRestaurantByCookingType/",
        "api/Comments/GetCommentsByRestaurantId/",
        "api/Restaurants/",
        "api/Restaurants/AverageRating/",
        "api/GetMenuByRestaurantId/",
        "api/Foods/GetDishByRestaurantId/",
        "api/Foods/GetStarterByRestaurantId/",
        "api/Foods/GetDessertByRestaurantId/",
        "api/Restaurants/GetRestaurantByText/"
      ],
      restos: [],
      inputResto: ""
    };
  },
  components: {
    RestoList
  },
  created() {
    axios
      .get(
        this.$store.state.IP +
          "/" +
          this.listeAxios[this.$route.params.typeSearch] +
          this.$route.params.search
      )
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

<style>
</style>
