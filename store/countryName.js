import Axios from "axios";



import {
    // search_weather_api, 
    country_name_api
} from "@/store/api";

// initial state
export const state = () => ({
    allCountriesNames:[],
})


export const getters = {
  getAllCountriesNames:(state) => {
    return state.allCountriesNames;
  },
 
};

// mutations
const mutations = {

    SET_ALL_COUNTRY_NAMES(state, data) {
    state.allCountriesNames = data;
    // console.log("mutated")
  },

  UNSET_ALL_COUNTRY_NAMES(state) {
    state.allCountriesNames = [];
  },

};

// Actions
const actions = {

  fetchCountryNames({ commit }, picked) {
    return new Promise((resolve, reject) => {
      let url = country_name_api + picked
        Axios.get(url)
        .then(function(response) {
          commit("SET_ALL_COUNTRY_NAMES", response.data)
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
