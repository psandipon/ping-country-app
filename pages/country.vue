<template>
  <div>
    <!-- <v-row align="center"> -->
    <v-card flat>
      <v-img :src="require('@/assets/searchCountry.png')" width="200px">
      </v-img>
      <countrySearch></countrySearch>
    </v-card>

    <!-- <v-card>
      <div>
        <div v-if="Object.keys(this.getCurrentCountry).length != 0">
          <pre style="text-align: left"> {{ getCurrentCountry }} </pre>
        </div>
      </div>
    </v-card> -->
    <!-- </v-row> -->

    <!-- <countryCard ping="left"></countryCard> -->
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
  methods: {},
  mounted() {
    if (Object.keys(this.getAllCountriesData).length == 0)
      this.fetchCountryData();
  }
};
</script>

<style lang="scss" scoped></style>
