import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyD2ZWW8_hdp-bW5xfu4aVfuvIY8ny5Ak7Q',
      authDomain: 'it-ads-ad59a.firebaseapp.com',
      databaseURL: 'https://it-ads-ad59a.firebaseio.com',
      projectId: 'it-ads-ad59a',
      storageBucket: 'it-ads-ad59a.appspot.com',
      messagingSenderId: '1094875076714'
    })
  }
})
