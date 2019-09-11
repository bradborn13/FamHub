import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/router";
// import VueGAPI from "vue-gapi";
import GoogleLogin from "vue-google-login";

Vue.use(VueRouter);
// Vue.use(VueGAPI, {
//   apiKey: process.env.GOOGLE_API_KEY,
//   clientId: process.env.GOOGLE_CLIENT_ID
// });
Vue.use(GoogleLogin, {
  client_id: process.env.GOOGLE_CLIENT_ID
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");