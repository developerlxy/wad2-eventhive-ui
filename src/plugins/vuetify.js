import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '../assets/styles/material-icons.css';
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify);
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});


export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'mdi' ,
  },
  theme: {
    themes: {
      light: {
        brownDark: '#735019',
        brownMid: '#E8AC1F',
        brownLight: '#F9D8B7',
        greenDark: '#779977',
        greenMid: '#A9C4BB',
        greenLight: '#D3E0D7',
        peachDark: '#BC7547',
        peachMid: '#DC8D6C',
        peachLight: '#FFE6D8',
        error: '#bd5959',
        success: '#86B71B',
        warning: '#FF853F'
      },
    },
  },
});
