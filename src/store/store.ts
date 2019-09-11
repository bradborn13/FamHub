import Vue from "vue";
import Vuex from "vuex";
import RootState from "./state";
import { mutations } from "./mutations";
// import { actions } from "./actions";
// import { getters } from "./getters";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: new RootState(),
  mutations,
  //   actions,
  //   getters,
  modules: {}
});
