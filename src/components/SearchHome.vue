<template>
  <main>
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
      restos: []
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
  }
};
</script>

<style>
</style>
