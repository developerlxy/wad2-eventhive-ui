import Vue from 'vue';
import Vuex from 'vuex';
import toast from './moduleToast';
import dialog from './moduleDialog';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    user: null
  },

  mutations: {
    login (state, user) {
      state.user = user
    },
    logout (state) {
      state.user = null
    }
  },

  actions: {
  },
  
  modules: {
    toast,
    dialog,
  },
});
