<template>
  <div>
    <countrySearch></countrySearch>
    <countryCard ping="left"></countryCard>
  </div>
</template>

<script>
import countryCard from "../components/countryCard.vue";
import countrySearch from "../components/countrySearch.vue";
import global from "~/mixins/global.js";

export default {
  mixins: [global],
  components: {
    countryCard,
    countrySearch
  },
  data: () => ({}),
  methods: {}
};
</script>

<style lang="scss" scoped></style>
