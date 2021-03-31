<template>
  <div id="app">
    <div>
      <router-link to="/"></router-link>
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
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
