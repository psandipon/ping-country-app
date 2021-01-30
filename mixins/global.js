
import { mapMutations, mapGetters, mapActions  } from 'vuex'

export default {
  
  data() {
    return {
    
      // snackbarFail: true,
      // snackbarSuccess: false,
    }
  },
  computed: {
    ...mapGetters("jokes", ["getJokeData"]),
    ...mapGetters('weather', ['getWeatherData']),
    // ...mapGetters('order', ['getNotificationSuccess','getNotificationFail']),
    
    // hasToken() {
    //   return this.$store.state.localStorage.token.length == 0 ? false : true
    // },
    
    // getCustomerInfo(){
    //   return this.$store.state.localStorage.customerInfo
    // },
    // getNotificationSuccess(){
    //   return this.$store.state.snackbarSuccess
    // },
    // getNotificationFail(){
    //   return this.$store.state.snackbarFail
    // }

  },
//   mounted() {
//     if (!this.hasToken) {
//       this.$router.push('/not-authorised')
//     }
//   },
  methods: {
    ...mapActions('jokes', ['getRandomJoke']),
    ...mapActions("weather", ["fetchWeatherData"]),
 
    // ...mapMutations('products', ['SET_CURRENT_PRODUCT_ITEM']),
  },
  watch: {},
}