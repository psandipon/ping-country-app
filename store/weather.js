import Axios from "axios";

import {
    weather_token
} from "@/store/token";

import {
    search_weather_api
} from "@/store/api";

// initial state
export const state = () => ({
  weather:{},
 
})


export const getters = {
  getWeatherData:(state) => {
    return state.weather;
  },
 
};

// mutations
const mutations = {

  SET_WEATHER_DATA(state, data) {
    state.weather = data;
    // console.log("mutated")
  },

  UNSET_WEATHER_DATA(state) {
    state.weather = {};
  },

};

// Actions
const actions = {

  fetchWeatherData({ commit },location) {
  
    return new Promise((resolve, reject) => {
        // let url = search_weather_api + location + token + APPID
        // q=dhaka&APPID=ea334fcd31745f894f3fec567ab96474
        let searchParam = {
            q:location,
            APPID:weather_token
        }
        Axios.get(search_weather_api, {
            params: searchParam,
        })
        .then(function(response) {
          commit("SET_WEATHER_DATA", response.data)
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
