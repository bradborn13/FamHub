<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  name: "app",
  components: {
    HelloWorld
  }
})
// eslint-disable-next-line
export default class app extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
