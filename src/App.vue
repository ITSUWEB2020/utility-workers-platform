<template>
  <div id="app">
  <secret  v-if="isLogin == false"></secret>
  
    <router-view/>
  </div>
</template>

<script>
import secret from './views/Secret.vue';
export default {
  components:{
    secret:secret
  },
  computed: {
  isRegister() {
     return this.$route.name === 'Register'
  },
  isReset(){
         return this.$route.name === 'Resetpass'

  },
  isLogin(){
         return this.$route.name === 'Login' || this.$route.name === 'Resetpass' || this.$route.name === 'Register'

  }
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
