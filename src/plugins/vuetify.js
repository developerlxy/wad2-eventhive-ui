import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '../assets/styles/material-icons.css';

Vue.use(Vuetify);


export default new Vuetify({
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
        peachLight: '#F7D0C1',
        error: '#D42900',
        success: '#86B71B',
        warning: 'FF853F'
      },
    },
  },
});
