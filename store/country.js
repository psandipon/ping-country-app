import Axios from "axios";



import {
    // search_weather_api, 
    country_api
} from "@/store/api";

// initial state
export const state = () => ({
    allCountries:[],
})


export const getters = {
  getAllCountriesData:(state) => {
    return state.allCountries;
  },
 
};

// mutations
const mutations = {

    SET_ALL_COUNTRY_DATA(state, data) {
    state.allCountries = data;
    // console.log("mutated")
  },

  UNSET_ALL_COUNTRY_DATA(state) {
    state.allCountries = [];
  },

};

// Actions
const actions = {

  fetchCountryData({ commit }) {
    return new Promise((resolve, reject) => {
        Axios.get(country_api)
        .then(function(response) {
          commit("SET_ALL_COUNTRY_DATA", response.data)
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error.response);
        });
    });
  },



};

export default {
  state,
  getters,
  actions,
  mutations,
};
