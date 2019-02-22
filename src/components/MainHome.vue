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
    <section class="list-resto">
      <RestoList :restos="restos"/>
    </section>
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

<style>
</style>
