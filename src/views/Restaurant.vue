<template>
  <main>
    <form
      class="formAddResto"
      @submit.prevent="modifResto"
      v-if="this.$store.state.userRole.name=='admin'"
    >
      <h2>Modifier le restaurant</h2>
      <input type="text" class="form-control" placeholder="Name" v-model="resto.name">
      <input type="text" class="form-control" placeholder="address" v-model="resto.address">
      <input type="text" class="form-control" placeholder="description" v-model="resto.description">
      <input type="text" class="form-control" placeholder="00" v-model="resto.phoneNumber">
      <input type="text" class="form-control" placeholder="cookingType" v-model="resto.cookingType">
      <input type="text" class="form-control" placeholder="schedule" v-model="resto.schedule">
      <input
        type="number"
        class="form-control"
        placeholder="averageRating"
        v-model="resto.averageRating"
      >

      <!-- <textarea class="form-control" placeholder="Comment..." v-model="newQuestion.title"></textarea> -->
      <button type="submit" class="btn btn-primary buttonForm">Modifier</button>
      <button @click="deleteResto" type="button" class="btn btn-primary buttonForm">Supprimer</button>
    </form>
    <!-- SECTION nom -->
    <section class="name-wrap">
      <div class="box-name">
        <h2>{{ resto.name }}</h2>
        <img class="coeur" src="@/assets/img/heart-vide.png" alt>
        <img class="coeur hidden" src="@/assets/img/heart-full.png" alt>
        <div class="note">
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="far fa-circle"></i>
          <i class="far fa-circle"></i>
        </div>
      </div>
    </section>
    <!-- horaire -->
    <section class="horaire-box">
      <h5>Ouvert de {{resto.schedule}}</h5>
    </section>
    <!-- téléphone -->
    <section class="info-box">
      <p class="tel">tel. {{ resto.phoneNumber}}</p>
      <p>{{resto.address}}</p>
    </section>
    <!-- description -->
    <section class="description-box">
      <p>{{ resto.description}}</p>
    </section>
    <!-- Menu -->
    <section class="menu-box">
      <h4>Menu</h4>
      <form class="formAddPlat" @submit.prevent="addPlat">
        <h2>Ajouter un plat</h2>
        <input type="text" class="form-control" placeholder="name" v-model="platToAdd.name">
        <input type="text" class="form-control" placeholder="description" v-model="platToAdd.description">
        <input type="number" class="form-control" placeholder="price" v-model="platToAdd.price">
        <p>
          <label for="pays">De quel type de plat s'agit-il ?</label><br />
          <select name="pays" id="pays">
              <option value="entrees">Entrées</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
          </select>
        </p>
        <button type="submit" class="btn btn-primary buttonForm">Ajouter</button>
      </form>
      <PlatList :plats="restopPlats"/>
      <h6>Entrees</h6>
      <h6>Plats</h6>
      <h6>Desserts</h6>
    </section>
    <!-- Commentaires -->
    <section class="comm-wrap">
      <h4 class="pink">
        Commentaires
        <span>(102)</span>
      </h4>
      <!-- Contenant box commentaires -->
      <div class="all-comm">
        <form class="formAddComm" @submit.prevent="addComm">
          <h2>Ajouter un commentaire</h2>
          <input
            type="text"
            class="form-control"
            placeholder="commentaire"
            v-model="commToAdd.content"
          >
          <input type="number" class="form-control" placeholder="rating" v-model="commToAdd.rating">
          <button type="submit" class="btn btn-primary buttonForm">Poster</button>
        </form>
      </div>
      <CommList :comms="comms"/>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import CommList from "../components/CommList.vue";
import PlatList from "../components/PlatList.vue";

export default {
  name: "app",
  data() {
    return {
      resto: [],
      comms: [],
      commToAdd: [],
      platToAdd: [],
      restoEntrees: [],
      restopPlats: [],
      restoDesserts: []
    };
  },
  components: {
    CommList,
    PlatList
  },
  created() {
    axios
      .get(this.$store.state.IP + "/api/Restaurants/" + this.$route.params.id)
      .then(response => {
        this.resto = response.data;
      });
    axios
      .get(
        this.$store.state.IP +
          "/api/Comments/GetCommentsByRestaurantId/" +
          this.$route.params.id
      )
      .then(response => {
        this.comms = response.data;
      });
    axios
      .get(
        this.$store.state.IP +
          "/api/Foods/GetStarterByRestaurantId/" +
          this.$route.params.id
      )
      .then(response => {
        this.restoEntrees = response.data;
      });
    axios
      .get(
        this.$store.state.IP +
          "/api/Foods/GetDishByRestaurantId/" +
          this.$route.params.id
      )
      .then(response => {
        this.restopPlats = response.data;
      });
    axios
      .get(
        this.$store.state.IP +
          "/api/Foods/GetDessertByRestaurantId/" +
          this.$route.params.id
      )
      .then(response => {
        this.restoDesserts = response.data;
      });
  },
  methods: {
    modifResto() {
      //alert(this.restoToAdd.name)
      axios
        .put(this.$store.state.IP + "/api/Restaurants/" + this.resto.id, {
          id: this.resto.id,
          name: this.resto.name,
          address: this.resto.address,
          description: this.resto.description,
          phoneNumber: this.resto.phoneNumber,
          cookingType: this.resto.cookingType,
          schedule: this.resto.schedule,
          averageRating: this.resto.averageRating
        })
        .then();
    },
    deleteResto() {
      let suppr = confirm("Voulez-vous vraiment supprimer le restaurant ?");
      if (suppr) {
        axios
          .delete(this.$store.state.IP + "/api/Restaurants/" + this.resto.id)
          .then(this.$router.push("/"));
      }
    },
    addComm() {
      axios
        .post(this.$store.state.IP + "/api/Comments/", {
          restaurantID: this.$route.params.id,
          content: this.commToAdd.content,
          rating: this.commToAdd.rating
        })
        .then();
    },
    addPlat() {
      axios
        .post(this.$store.state.IP + "/api/Foods/GetDishByRestaurantId/", {
          restaurantId: this.$route.params.id,
          foodType: "Dish",
          price: this.platToAdd.price,
          name: this.platToAdd.name,
          description: this.platToAdd.description
        })
        .then();
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
  .note{
    i{
      padding-right: 3px;
    }
  }
}

.formAddResto,.formAddPlat,.formAddComm{
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald", sans-serif;
  padding: 20px;
  background-color: #003542;
  margin-bottom: 30px;
  h2{
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    background-color: #f42b65;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 6px 6px 0 0;
    width: 286px;
    text-align: center;
  }
  input,select,label {
    margin: 5px;
    // padding: 5px 140px 5px 5px;
    padding: 5px;
    width: 286px;
  }
  p{
    color: #fff;
    font-weight: 300;
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