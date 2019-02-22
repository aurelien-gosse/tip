<template>
  <div class="all-box">
    <PlatItem v-for="p in plats" :key="p.id" :plat="p"/>
  </div>
</template>

<script>
import PlatItem from "./PlatItem.vue";

export default {
  name: "PlatList",
  props: ["plats"],
  components: {
    PlatItem
  }
};
</script>

<style>
</style>