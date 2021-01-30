
import { mapMutations, mapGetters, mapActions  } from 'vuex'

export default {
  
  data() {
    return {
    
    }
  },
  // mounted() {
  //   // getAllCountriesData
  //   this.fetchCountryData();
  // },
  computed: {
    ...mapGetters("jokes", ["getJokeData"]),
    ...mapGetters('weather', ['getWeatherData']),
    ...mapGetters('country',['getAllCountriesData'])
  },
  methods: {
    ...mapActions('jokes', ['getRandomJoke']),
    ...mapActions("weather", ["fetchWeatherData"]),
    ...mapActions('country',["fetchCountryData"])
  },
  watch: {},
}