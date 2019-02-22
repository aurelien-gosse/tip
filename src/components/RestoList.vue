<template>
  <div class="list-resto">
    <RestoItem v-for="r in restos" :key="r.id" :resto="r"/>
  </div>
</template>

<script>
import RestoItem from "./RestoItem.vue";

export default {
  name: "RestoList",
  props: ["restos"],
  components: {
    RestoItem
  }
};
</script>

<style>
</style>