<template>
  <div class="cat-plat">
    <div class="box-plat">
      <div class="plat-intitule">
        <h5>{{plat.name}}</h5>
        <p>{{plat.description}}</p>
      </div>
      <div class="price">
        <p>{{plat.price}} €</p>
      </div>
    </div>
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
<style lang="scss">
  .cat-plat{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Oswald", sans-serif;
    margin-bottom: 30px;
    width: 100%;
    padding: 10px;
    .box-plat{
      display: flex;
      justify-content: space-between;
      .plat-intitule{
        h5{
          font-weight: 400;
          text-transform: uppercase;
          color:#2e2e2e;
          margin-bottom: 5px;
          width: 286px;
        }
        p{
          font-size: 14px;
        }
      }
      .price{
        width: 10%;
        text-align: right;
      }  
    }
    input,select,label {
      margin: 5px;
      // padding: 5px 140px 5px 5px;
      padding: 5px;
      width: 286px;
    }
    p{
      color: #2e2e2e;
      font-weight: 300;
    }
  }

  .buttonHome {
    font-family: "Oswald", sans-serif;
    width: 90px;
    margin: 5px 0;
    background-color: #fff;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: #f42b65;
      color: #fff;
    }
  }
</style>
