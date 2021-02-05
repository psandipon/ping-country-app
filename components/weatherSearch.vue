<template>
  <div>
    <v-autocomplete
      v-model="picked"
      :items="getAllCountriesData"
      label="Input Country Name"
      @change="call_fetchWeatherData"
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
    this.fetchWeatherData(this.picked);
  },
  methods: {
    call_fetchWeatherData() {
      if (!(this.picked === "")) {
        this.fetchWeatherData(this.picked);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
