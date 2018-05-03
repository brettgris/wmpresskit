import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { sync } from 'vuex-router-sync';

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import light from "@fortawesome/fontawesome-pro-light";
import regular from "@fortawesome/fontawesome-pro-regular";
import solid from "@fortawesome/fontawesome-pro-solid";

import WebFont from 'webfontloader';

import PercentagePlugin from './plugin/PercentagePlugin';



Vue.config.productionTip = false;

sync(store, router);

WebFont.load({
   google: {
      families: ['Lato:100,300,400,700,900']
   }
});

fontawesome.library.add(light, regular, solid, brands);

Vue.use(PercentagePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
