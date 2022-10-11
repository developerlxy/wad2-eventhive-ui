import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '../assets/styles/material-icons.css';

Vue.use(Vuetify);


export default new Vuetify({
  icons: {
<<<<<<< HEAD
    iconfont: 'fa',
=======
    iconfont: 'mdi'
>>>>>>> f1da1c2e9ebfb38736e4686fe1b46eb889a97268
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
        error: '#D42900',
        success: '#86B71B',
        warning: 'FF853F'
      },
    },
  },
});
