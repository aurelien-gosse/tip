<template>
  <div class="all-box">
    <div class="all-plat">
      <PlatItem v-for="p in plats" :key="p.id" :plat="p"/>
    </div>
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

<style lang="scss">
.all-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  .all-plat{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>