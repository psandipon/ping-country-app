<template>
  <div>
    <v-app-bar :clipped-left="clipped" fixed app color="gray" elevate-on-scroll>
      <v-container class="py-0 pb-0 mb-5 fill-height">
        <v-avatar tile class="mr-5" size="65">
          <img :src="require('@/assets/logo.png')" alt="John" />
        </v-avatar>

        <v-toolbar-title style="margin-left:10px" class="mr-5">
          Weather
          <span class="cyan--text ml-0"> App </span>
        </v-toolbar-title>
        <v-spacer> </v-spacer>

        <div class="d-none d-sm-flex ml-4">
          <v-btn
            text
            color="grey darken-2 "
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-icon> {{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>

            <!-- <v-icon class="mr-2"> {{ item.icon }}</v-icon> -->
          </v-btn>
        </div>
        <!-- <v-spacer /> -->
        <!-- <div
          class="d-none d-lg-flex d-xl-none d-md-flex d-lg-none d-flex d-sm-none"
        ></div> -->
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
import { mapGetters } from "vuex";
export default {
  mixins: [global],
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        //   Home, Tax, Living Cost, Immigration.
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
          badge: false
        },
        {
          icon: "mdi-map",
          title: "Visit",
          to: "/visit",
          badge: false
        }
        // {
        //   icon: "mdi-cart",
        //   title: "Cart",
        //   to: "/cart",
        //   badge: true
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,

      autocomp: "",

      timeout: 3000
    };
  },

  computed: {
    // ...mapGetters("order", ["getCartData"]),
    // ...mapGetters("user-info", ["getToken"]),
    // hasToken() {
    //   return this.$store.state.localStorage.token.length == 0 ? false : true;
    // }
  }
};
</script>
