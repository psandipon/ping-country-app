<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-img :src="getAllCountriesNames[0].flag" height="200px"></v-img>
      <v-card-title>
        {{ getAllCountriesNames[0].name }}
      </v-card-title>
      <v-row class="ml-2">
        <v-card-subtitle>
          {{ getAllCountriesNames.capital }}
        </v-card-subtitle>
      </v-row>
      <!-- </div> -->

      <v-card-actions>
        <v-btn color="orange lighten-2" text @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          Explore
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ getAllCountriesNames }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    ping: {{ ping }}
    <!-- <v-img :src="showBangladeshData.flag" height="200px"></v-img> -->
    <!-- {{ getAllCountriesData }}
     -->
    <!-- {{ showBangladeshData.flag }} -->
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  data: () => ({
    show: false
  }),
  computed: {}
};
</script>

<style lang="scss" scoped></style>
