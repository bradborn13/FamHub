<script  >
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "HelloWorld",
  props: {
    msg: String
  }
})
// eslint-disable-next-line
export default class HelloWorld extends Vue {
  
  name = "lucian"
  navigate(routeName){
    this.$router.push('/login');
  }
}
</script>
<template>
<article>
  <div class="hello">
    <p>Ciao Lucian,asa incepem proiectu cu un simple "HELLO WORLD"  + {{name}}</p>
    <button id="notifyBtn" v-on:click="navigate('login')" class="button" type="button">Notify me when ...</button>
  </div>
  </article>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
  