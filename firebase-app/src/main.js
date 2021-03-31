import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA3XlGO0lTYRy9gHNjBp82BSdNg2zCiLVQ",
  authDomain: "project-work-web.firebaseapp.com",
  projectId: "project-work-web",
  storageBucket: "project-work-web.appspot.com",
  messagingSenderId: "230474659781",
  appId: "1:230474659781:web:e03ad70264f712cb8abdac",
  measurementId: "G-94C9N95LH4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
