<template>
  <div class="box-comm">
    <!-- En-tête box comm -->
    <div class="title-comm">
      <div class="name">
        <h4>{{comm.content}}</h4>
        <h6>- Bruxelles</h6>
      </div>
      <div class="note">
        <i class="fas fa-circle"></i>
        <i class="fas fa-circle"></i>
        <i class="fas fa-circle"></i>
        <i class="far fa-circle"></i>
        <i class="far fa-circle"></i>
      </div>
    </div>
    <!-- Le commentaire -->
    <div class="txt-comm">
      <h6>11/02/2018</h6>
      <p>{{comm.content}}</p>
    </div>
    <button
      @click="deleteComm(comm.id)"
      type="button"
      class="btn btn-primary buttonHome"
    >Supprimer</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["comm"],
  methods: {
    deleteComm(commId) {
      let suppr = confirm("Voulez-vous vraiment supprimer le commentaire ?");
      if (suppr) {
        axios
          .delete(this.$store.state.IP + "/api/Comments/" + commId)
          .then();
      }
    }
  }
};
</script>

<style lang="scss">
.note{
    i{
      padding-right: 3px;
    }
  }
</style>
