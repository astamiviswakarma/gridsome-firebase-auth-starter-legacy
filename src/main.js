// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex';
import createStore from './store';
import "@/plugins/firebase";

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  appOptions.store = createStore();

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
