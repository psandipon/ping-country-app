<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="getImageFileName"></v-img>
      <v-card-title>
        <v-text-field
          v-model="picked"
          label="Input Country Name"
          @change="call_fetchWeatherData"
          placeholder="Dense & Rounded"
          filled
          rounded
          dense
        ></v-text-field>
      </v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Today's Weather</v-card-title>

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

      <v-card-actions>
        <!-- <v-btn color="deep-purple lighten-2" text @click="items"> -->
        <div>
          <v-row align="center">
            <v-col cols="12">
              <v-select
                :items="items"
                :menu-props="{ top: true, offsetY: true }"
                v-model="picked"
                label="Country"
                @change="call_fetchWeatherData"
              ></v-select>
            </v-col>
          </v-row>
        </div>

        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
        ></v-progress-circular>

        <!-- </v-btn> -->
      </v-card-actions>
    </v-card>
    <!-- <pre style=" text-align: left;"> {{ getWeatherData }} </pre> -->
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  created() {
    this.call_fetchWeatherData();
  },
  data: () => ({
    items: ["Bangladesh", "USA", "Canada", "China", "France"],
    picked: ""
  }),
  methods: {
    call_fetchWeatherData() {
      this.fetchWeatherData(this.picked);
    }
  },
  computed: {
    getImageFileName() {
      if (this.getWeatherData.weather[0].main === "") {
        return require("@/assets/logo.png");
      } else {
        return require("@/assets/" +
          this.getWeatherData.weather[0].main +
          ".png");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
