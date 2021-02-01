<template>
  <div>
    <v-autocomplete
      v-model="picked"
      :items="getAllCountriesData"
      label="Input Country Name"
      @change="call_fetchCountryNames"
      :item-text="item => item.name"
      item-value="name"
    ></v-autocomplete>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  data: () => ({
    picked: "Bangladesh"
  }),
  created() {
    this.fetchCountryNames(this.picked);
  },
  methods: {
    call_fetchCountryNames() {
      if (!(this.picked === "")) {
        this.fetchCountryNames(this.picked);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
