 <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/guitar.jpg" height="50%" width="50%" />
    <br />
    <button class="button" v-on:click="navigate('/login')" type="button">Login</button>
    <button class="button" v-on:click="navigate('/googleAuth')" type="button">Google Auth</button>

    <router-view></router-view>
  </div>
</template>

<script>
import Component from "vue-class-component";
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  name: "app",
  components: {}
})
// eslint-disable-next-line
export default class app extends Vue {
  navigate(route) {
    this.$router.push(route);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
