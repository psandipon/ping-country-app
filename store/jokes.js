import Axios from "axios";



import {
    random_joke_api
} from "@/store/api";

// initial state
export const state = () => ({
  joke:{},
 
})


export const getters = {
  getJokeData:(state) => {
    return state.joke;
  },
 
};

// mutations
const mutations = {

  SET_JOKE_DATA(state, data) {
    state.joke = data;
    console.log("mutated")
  },

  UNSET_JOKE_DATA(state) {
    state.joke = {};
  },

};

// Actions
const actions = {

  getRandomJoke({ commit }) {
  
    return new Promise((resolve, reject) => {
      Axios.get(random_joke_api)
        .then(function(response) {
          console.log('here ??',response)
          commit("SET_JOKE_DATA", response.data)
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
