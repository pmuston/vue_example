import desserts from "../api/desserts";

import {
  LOADING_BEGIN,
  LOADING_FAILURE,
  LOADING_SUCCESS,
  SET_DESSERTS,
  REMOVE_DESSERT,
  ADD_DESSERT
} from "./types";

const initialState = {
  desserts: [],
  loading: false,
  error: false
};

const getters = {
  desserts: (state) => state.desserts
};

const actions = {
  desserts({ commit }) {
    console.log("action desserts");
    commit(LOADING_BEGIN);
    return desserts
      .loadDesserts()
      .then(({ data }) => commit(SET_DESSERTS, data))
      .then(() => commit(LOADING_SUCCESS))
      .catch(() => commit(LOADING_FAILURE));
  },
  removeDessert({ commit, dispatch }, dessert) {
    console.log("action removeDessert", dessert);
    commit(LOADING_BEGIN);
    return desserts
      .removeDessert(dessert)
      .then(() => dispatch("desserts"))
      .then(() => commit(LOADING_SUCCESS))
      .catch(() => commit(LOADING_FAILURE));
  },
  addDessert({ commit, dispatch }, dessert) {
    console.log("action addDessert", dessert);
    commit(LOADING_BEGIN);
    return desserts
      .addDessert(dessert)
      .then(() => dispatch("desserts"))
      .then(() => commit(LOADING_SUCCESS))
      .catch(() => commit(LOADING_FAILURE));
  },
  updateDessert({ commit, dispatch }, dessert) {
    console.log("action updateDessert", dessert);
    commit(LOADING_BEGIN);
    return desserts
      .updateDessert(dessert)
      .then(() => dispatch("desserts"))
      .then(() => commit(LOADING_SUCCESS))
      .catch(() => commit(LOADING_FAILURE));
  }
};

const mutations = {
  [LOADING_BEGIN](state) {
    state.loading = true;
    state.error = false;
  },
  [LOADING_FAILURE](state) {
    state.loading = false;
    state.error = true;
  },
  [LOADING_SUCCESS](state) {
    state.loading = false;
    state.error = false;
  },
  [SET_DESSERTS](state, desserts) {
    console.log("desserts", desserts);
    state.desserts = desserts;
  },
  [REMOVE_DESSERT](state, dessert) {
    console.log("removeDessert", dessert);
    state.desserts.splice(state.desserts.indexOf(dessert), 1);
  },
  [ADD_DESSERT](state, dessert) {
    console.log("addDessert", dessert);
    state.desserts.splice(state.desserts.indexOf(dessert), 1);
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
