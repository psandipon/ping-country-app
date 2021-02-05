<template>
  <div>
    <div v-if="Object.keys(getCurrentCountry).length != 0">
      <!-- <pre style="text-align: left"> {{ getCurrentCountry }} </pre> -->

      <v-container v-if="true">
        <v-row no-gutters>
          <v-col>
            <!-- cols="6" md="4" -->
            <v-card>
              <div
                v-for="(item, i) in Object.entries(getCurrentCountry)"
                :key="i"
              >
                <v-btn
                  style="float: left"
                  @click="selectedItem(item[1])"
                  class="ma-2"
                >
                  {{ item[0] }}
                </v-btn>
                <!-- <br />
          <br /> -->
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>
              <div class="h1">{{ slItem }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global.js";

export default {
  mixins: [global],
  components: {},
  data: () => ({
    slItem: ""
  }),
  methods: {},
  mounted() {
    if (Object.keys(this.getCurrentCountry).length == 0)
      this.$router.push("/country");
  },
  methods: {
    selectedItem(item) {
      console.log(item);
      this.slItem = item;
    }
  }
};
</script>

<style lang="scss" scoped></style>
