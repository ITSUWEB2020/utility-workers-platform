<template>
<div class="main">
    <div>
    <Top-header class="heder"></Top-header>
    </div>
    

     <div class="lheder">
 <ol class="list">
        <li><router-link to="/dashboard"><img src="../assets/Dashboardicon.png"> Dashboard</router-link></li>
        <li><router-link to="/projects"><img src="../assets/Projectsicon.png"> Projects</router-link><li>
        <li><a ><img src="../assets/Calendaricon.png"> Calendar</a></li>
        <li><a ><img src="../assets/Teamsicon.png"> Teams</a></li>
        <li><a ><img src="../assets/Membericon.png"> Members</a></li>
        <li><a ><img src="../assets/Settingsicon.png"> Settings</a></li>
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
   
  /* width:100%; */
  
background-color: #ffffff;
}
.heder{
    position: absolute;
width: 16%;
/* height: 3em; */
left: 0px;
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
height: 674px;
left: 0px;
top: 48px;

background:#31758C;

}
.for-small-screens{
    position: absolute;
width: 16%;
height: 674px;
left: 0px;
top: 48px;

background: #CCCCCC
}
.rheder{
  position: absolute;
width: 20%;
height: 674px;
left: 1000px;
top: 48px;


background: #1b1ea7;
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