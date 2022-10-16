import { createApp } from 'vue';
import App from './App.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLocationDot,
  faDesktop,
  faClock,
  faMoneyBill1,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faDesktop, faClock, faMoneyBill1, faPhone);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component(VueCountdown.name, VueCountdown);

app.mount('#app');
