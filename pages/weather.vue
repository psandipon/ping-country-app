<template>
  <div>
    <weatherSearch> </weatherSearch>
    <weatherCard> </weatherCard>
  </div>
</template>

<script>
import weatherSearch from "../components/weatherSearch.vue";
import weatherCard from "../components/weatherCard.vue";
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  components: {
    weatherCard,
    weatherSearch
  },
  data: () => ({}),
  methods: {}
};
</script>

<style lang="scss" scoped></style>
