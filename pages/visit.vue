<template>
  <div>
    <!-- <div>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            :items="items"
            :menu-props="{ top: true, offsetY: true }"
            v-model="picked"
            label="Label"
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <div>
      <selected :picked="picked" />
    </div> -->
    <!-- {{  }} -->
    {{ getJokeData }}
    -----------------------------------
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div v-else>
      {{ jamela }}
      <br />
      {{ joke.setup }}
      <br />
      {{ joke.punchline }}
      <br />
      <v-btn class="mt-5" x-small @click="callingJokeMeth"> update </v-btn>
    </div>
  </div>
</template>

<script>
import selected from "../components/selected";
// import { mapMutations, mapGetters, mapActions } from "vuex";
import global from "~/mixins/global.js";
export default {
  mixins: [global],
  components: {
    selected
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    picked: "",
    joke: {},
    loading: false,
    jamela: "",
    sp: 1
  }),

  created() {
    this.callingJokeMeth();
    // this.fetchWeatherData("dhaka");
  },
  methods: {
    callingJokeMeth() {
      this.jamela = "";
      this.loading = true;
      this.getRandomJoke()
        .then(res => {
          console.log(res);
          this.joke = res;
          this.loading = false;
        })
        .catch(er => {
          console.log("here ???", er);
          this.loading = false;
          this.jamela = "jamela hosse";
        });
    },

    sum() {}
  }
};
</script>
