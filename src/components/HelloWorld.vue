

<script>
import Component from "vue-class-component";
import Vue from "vue";
@Component({
  name: "HelloWorld",
  props: {
    msg: String
  }
})
// eslint-disable-next-line
export default class HelloWorld extends Vue {}
</script>
<template>
  <div class="hello">
    <p>Ciao Lucian,asa incepem proiectu cu un simple "HELLO WORLD"</p>
    <button id="notifyBtn" class="button" type="button">Notify me when ...</button>
  </div>
</template>
<script src = "../action/login.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
  