<template>
  <div class="all-box">
    <CommItem v-for="c in comms" :key="c.id" :comm="c"/>
  </div>
</template>

<script>
import CommItem from "./CommItem.vue";

export default {
  name: "CommList",
  props: ["comms"],
  components: {
    CommItem
  }
};
</script>

<style>
</style>