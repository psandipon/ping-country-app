<template>
  <div>
    <v-autocomplete
      v-model="picked"
      :items="getAllCountriesData"
      label="Input Country Name"
      @change="gotoInfoPage"
      :item-text="item => item.name"
      item-value="name"
      rounded
      outlined
      prepend-inner-icon="search"
      close
      return-object
    >
    </v-autocomplete>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  data: () => ({
    picked: {}
  }),
  created() {
    // this.fetchCountryNames(this.picked);
    // this.$router.push("/country_info");
  },
  methods: {
    gotoInfoPage() {
      // console.log("here");
      // // if (!(this.picked === "")) {
      // //   this.fetchCountryNames(this.picked);
      // // }
      this.SET_CURRENT_COUNTRY_DATA(this.picked);
      this.$router.push("/country_info");
    }
  }
};
</script>

<style lang="scss" scoped></style>
