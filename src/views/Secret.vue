<template>

<div class="main">
     <div class="lheder">
       <Top-header class="heder"></Top-header>
 <ol class="list">
        <li><router-link to="/dash"><img src="../assets/Dashboardicon.png"> Dashboard</router-link></li>
        <li><router-link to="/projects"><img src="../assets/Projectsicon.png"> Projects</router-link></li>
        <li><router-link to="/calendar"><img src="../assets/Calendaricon.png"> Calendar</router-link></li>
        <li><router-link to="/teams"><img src="../assets/Teamsicon.png"> Teams</router-link></li>
        <li><router-link to="/members"><img src="../assets/Membericon.png"> Members</router-link></li>
        <li><router-link to="/dash" ><img src="../assets/Settingsicon.png"> Settings</router-link></li>
    </ol>
    </div>
</div>
</template>

<script>

// import Maain from '../components/Maain'
import TopHeader from '../components/Top-header'
    export default {
  name: 'Secret',
  components: {
      
     TopHeader,
    //  Maain,
    
      },    
      
      
      

    }

    
      
    
</script>

<style lang="css" scoped>
.main{
height: 100%;
  /* width:100%; */
  
background-color: #ffffff;
}
.heder{
    position: absolute;
width: 100%;
/* height: 3em; */

top: 0px;

background:  #31758C;
}
.onhed{
       position: absolute;
width: 20%;
height: 674px;
left: 600px;
top: 48px;

background: #d33f3f;
}
.lheder{
  position: absolute;
  width: 16%;
  top:0;
  left: 0;
  height: 100%;
  background-size: cover;
  background:#31758C;
  
}

.for-small-screens{
    position: absolute;
width: 16%;
height: 100%;
left: 0px;
top: 48px;
background-size: cover;

background: #CCCCCC
}

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.list{
    position: relative;
    top: 10%;
    list-style: none;
    left: 3%;
}  
li{
    display: flex;
    padding: 10px;
    font-family: Montserrat;
    font-weight: bold;
    align-items:center;
}
a{
    text-decoration: none;
    color: #D9F5FF;
    cursor: pointer;
}
@media(max-width:960px) {
  .lheder {
    display:none;
  }
}

@media(min-width:961px) {
  .for-small-screens {
    display:none;
  }
}
@media(min-width:961px) {
  .listfs {
    display:none;
    position: absolute;
    right: 80px;
  }
}
.listfs {
    
    position: relative;
    top: 8%;
    list-style: none;
    right: 45%;
  }
</style>