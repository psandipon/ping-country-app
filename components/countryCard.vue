<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <div v-if="!(showBangladeshData === undefined)">
        <v-img :src="showBangladeshData.flag" height="200px"></v-img>
        <v-card-title>
          {{ showBangladeshData.name }}
        </v-card-title>
        <v-row align="left" class="ml-2">
          <v-card-subtitle>
            {{ showBangladeshData.capital }}
          </v-card-subtitle>
        </v-row>
      </div>

      <v-card-actions>
        <v-btn color="orange lighten-2" text @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          Explore
        </v-btn>

        <!-- <v-spacer></v-spacer> -->

        <!-- <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn> -->
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
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
  computed: {
    showBangladeshData() {
      let found = this.getAllCountriesData.find(country => {
        if (country.name === "Bangladesh") return country;
      });

      return found;
    }
  }
};
</script>

<style lang="scss" scoped></style>
