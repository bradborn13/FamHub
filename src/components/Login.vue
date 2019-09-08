<script  >
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  name: "Login",
  props: {
    msg: String
  }
})
/* eslint-disable */
export default class Login extends Vue {
  rememberMe = false;
  authForm = {
    email: "",
    password: ""
  };
  authUser() {
    console.log(process.env.GOOGLE_CLIENT_ID, "COAIE");
    console.log(this.authForm, "form");
    this.$getGapiClient().then(gapi => {
      if (this.$isAuthenticated() !== true) {
        this.$login();
      }
      console.log(gapi, "theGAPI");
    });
  }

  redirectToGoogle() {
    const myWindow = window.open(
      "https://accounts.google.com",
      "Signup",
      "width=700, height=900"
    );
  }
}
</script>
<template>
  <div class="bodyStyle">
    <div class="body">
      <h1>Log in to FamHubb</h1>
      <input
        type="text"
        placeholder="Email"
        name="emailInput"
        v-model="authForm.email"
        class="inputTxt"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="passwordInput"
        v-model="authForm.password"
        class="inputTxt"
      />
      <br />
      <button class="button-log" v-on:click="authUser()" type="button">Sign In</button>
      <input type="checkbox" v-model="rememberMe" name="remmeberMe" value="rememberMe  " /> Remember Me
      <br />
    </div>
    <div class="footer">
      Dont have an account?
      <a href="#" @click="redirectToGoogle()">Sign Up</a>
    </div>
  </div>
</template>
<style>
.body {
  padding-bottom: 10px;
}
.bodyStyle {
  border-radius: 5px;
  border: 2px solid grey;
  height: 50%;
}
.inputTxt {
  width: 25%;
  line-height: 10px;
  margin-top: 10px;
}
h1 {
  font-family: "Segoe UI", Arial, sans-serif;
}
.footer {
  background: #f5f8fa;
  bottom: 0;
  padding-top: 20px;
  padding-bottom: 20px;
}
.button-log {
  margin-top: 20px;
  background: #1da1f2;
  border-color: #1da1f2;
  color: white;
  border-radius: 15px;
  border: 1px solid #1da1f2;
  width: 70px;
  height: 40px;
}
.button-log:hover {
  background-color: #006dbf;
}
p {
  font-family: "Segoe UI", Arial, sans-serif;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
  