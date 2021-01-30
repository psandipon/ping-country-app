<template>
  <div>
    <v-card class="mx-auto my-5" max-width="374">
      <!-- {{ selection }} -->
      <v-img height="250" :src="getImageFileName"></v-img>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Today's Weather</v-card-title>
      <v-img height="50" :src="weatherIcon"></v-img>
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>{{ getWeatherData.weather[0].main }}</v-chip>
          <v-chip>{{ getWeatherData.main.temp }} °C</v-chip>
          <v-chip>{{ getWeatherData.main.feels_like }} °C</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],

  data: () => ({
    items: ["Bangladesh", "USA", "Canada", "China", "France"],
    selection: true
  }),
  methods: {},
  computed: {
    getImageFileName() {
      if (this.getWeatherData.weather[0].main === "") {
        return require("@/assets/logo.png");
      } else {
        return require("@/assets/" +
          this.getWeatherData.weather[0].main +
          ".png");
      }
    },
    weatherIcon() {
      return `http://openweathermap.org/img/wn/${this.getWeatherData.weather[0].icon}@2x.png`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
