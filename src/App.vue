<template>
  <div id="app">
  <secret></secret>
    <router-view/>
  </div>
</template>

<script>
import secret from './views/Secret.vue';
export default {
  components:{
    secret:secret
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  
}
body.Register{
  background-image: url('bg.png');
  background-repeat: no-repeat;
  background-size: 100% 200%;
  height: 539px;
}
body.Login{
   background-image: url('bg.png');
  background-repeat: no-repeat;
  background-size:100% 200%;
  height: 539px;
}
</style>
