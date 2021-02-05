
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
    ...mapGetters('country',['getAllCountriesData','getCurrentCountry']),
    ...mapGetters('countryName',['getAllCountriesNames']),

  },
  methods: {
    ...mapActions('jokes', ['getRandomJoke']),
    ...mapActions("weather", ["fetchWeatherData"]),
    ...mapActions('country',["fetchCountryData"]),
    ...mapActions('countryName',["fetchCountryNames"]),

    ...mapMutations('country', ['SET_CURRENT_COUNTRY_DATA'])
  },
  watch: {},
}