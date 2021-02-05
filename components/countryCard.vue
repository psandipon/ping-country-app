<template>
  <div>
    <v-card
      class="ml-0"
      max-width="500"
      v-if="!(getAllCountriesNames[0] == undefined)"
    >
      <v-img :src="getAllCountriesNames[0].flag" height="200px"></v-img>
      <v-card-title>
        {{ getAllCountriesNames[0].name }}
      </v-card-title>
      <v-row class="ml-0">
        <v-card-subtitle>
          {{ getAllCountriesNames[0].capital }}
        </v-card-subtitle>
      </v-row>
      <!-- </div> -->
      <!-- 
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
            {{ getAllCountriesNames[0].name }}
          </v-card-text>
          <v-btn @click="dialogModel = true"> READ MORE </v-btn>
        </div>
      </v-expand-transition> -->
      <v-btn @click="dialogModel = true"> READ MORE </v-btn>
    </v-card>
    <!-- ping: {{ ping }} -->
    <!-- <v-img :src="showBangladeshData.flag" height="200px"></v-img> -->
    <!-- {{ getAllCountriesData }}
     -->
    <!-- {{ showBangladeshData.flag }} -->
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      v-model="dialogModel"
    >
      <v-card>
        <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
        <v-card-text>
          <!-- <div class="text-h2 pa-12">Hello world!</div> -->
          {{ getAllCountriesNames }}
        </v-card-text>
        <!-- <v-card-actions class="justify-end">
          <v-btn text @click="dialogModel = false">Close</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  data: () => ({
    show: false,
    dialogModel: false
  }),
  computed: {}
};
</script>

<style lang="scss" scoped></style>
