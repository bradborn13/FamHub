<script >
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  name: "Login",
  props: {
    msg: String
  }
})
// eslint-disable-next-line
export default class Login extends Vue {
  navigate() {
    this.$router.push("/home");
  }
  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log(profile);
    alert("loggedIn");
  }
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://apis.google.com/js/platform.js",
      "async defer"
    );
    document.head.appendChild(recaptchaScript);
  }
}
</script>

<template>
  <div class>
    <p>Drive API Quickstart</p>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>





  
