import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.prototype.$categories = [
  { title: 'Sports', src: 'fa-solid fa-volleyball', filter: 'sports'},
  { title: 'Arts', src: 'fa-solid fa-palette', filter: 'arts'},
  { title: 'Music', src: 'fa-solid fa-music', filter: 'music'},
  { title: 'Food', src: 'fa-solid fa-utensils', filter: 'food'},
  { title: 'Pets', src: "fa-solid fa-dog", filter: 'pets'},
  { title: 'Games', src: "fa-solid fa-gamepad", filter: 'games'},
  { title: 'Others', src: "fa-solid fa-shuffle", filter: 'others'},
]

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
