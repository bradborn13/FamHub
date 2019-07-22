

<script lang="ts">
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
  cart ='dsa';
    navigate(){
  
    this.$router.push('/home');
  }
}
</script>
<template>
  <div class="hello">
    <h1>Do you want to login?</h1>
    <p>LOGIN PAGE</p>
    <button class="button" v-on:click="navigate()" type="button">Click here</button>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
  