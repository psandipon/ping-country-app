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
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div v-else>
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
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: {
    selected
  },

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    picked: "",
    joke: {},
    loading: false
  }),

  created() {
    this.callingJokeMeth();
  },
  methods: {
    ...mapActions("jokes", ["getRandomJoke"]),
    callingJokeMeth() {
      this.loading = true;
      this.getRandomJoke().then(res => {
        console.log(res);
        this.joke = res;
        this.loading = false;
      });
    }
  }
};
</script>
