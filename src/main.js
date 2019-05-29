import Vue from 'vue';
import App from './components/App';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mainPageSection: "top",
    loadError: false,
    loadErrorText: '',
    filtredObjects: []
  },
  mutations: {
    changeMainPageSection(state, payload) {
      state.mainPageSection = payload;
    },
    changeLoadError(state, status) {
      state.loadError = status;
    },
    changeFiltredObjects(state, objects) {
      state.filtredObjects = objects;
    },
    changeLoadErrorText(state, text) {
      state.loadErrorText = text;
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})