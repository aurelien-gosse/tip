<template>
  <div>
    <h5>{{plat.name}}</h5>
    <p>{{plat.description}}</p>
    <p>{{plat.price}}</p>
    <button
      @click="deleteplat(plat.id)"
      type="button"
      class="btn btn-primary buttonHome"
    >Supprimer</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["plat"],
  methods: {
    deleteplat(platId) {
      let suppr = confirm("Voulez-vous vraiment supprimer le plat ?");
      if (suppr) {
        axios
          .delete(this.$store.state.IP + "/api/Foods/" + platId)
          .then();
      }
    }
  }
};
</script>