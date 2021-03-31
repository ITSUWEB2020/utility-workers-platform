<template>
<div  class="main">
    <div>
    <Top-header class="heder"></Top-header>
    </div>
    <div>
     <component :is="dynamicComponent"></component>
    </div>
    <div class="lheder">
 <ol class="list">
        <li><a @click="dynamicComponent='Abou'" ><img src="../assets/Dashboardicon.png"> Dashboard</a></li>
        <li><a @click="dynamicComponent='Proj'" ><img src="../assets/Projectsicon.png"> Projects</a></li>
        <li><a @click="dynamicComponent='Calen'"><img src="../assets/Calendaricon.png"> Calendar</a></li>
        <li><a @click="dynamicComponent='Teams'"><img src="../assets/Teamsicon.png"> Teams</a></li>
        <li><a @click="dynamicComponent='Memb'"><img src="../assets/Membericon.png"> Members</a></li>
        <li><a @click="dynamicComponent='Sett'"><img src="../assets/Settingsicon.png"> Settings</a></li>
    </ol>
    </div>
     <div class="for-small-screens">
 <ol class="listfs">
        <li><a @click="dynamicComponent='Abou'" ><img src="../assets/Dashboardicon.png"></a></li>
        <li><a @click="dynamicComponent='Proj'" ><img src="../assets/Projectsicon.png"></a></li>
        <li><a @click="dynamicComponent='Calen'"><img src="../assets/Calendaricon.png"></a></li>
        <li><a @click="dynamicComponent='Teams'"><img src="../assets/Teamsicon.png"></a></li>
        <li><a @click="dynamicComponent='Memb'"><img src="../assets/Membericon.png"></a></li>
        <li><a @click="dynamicComponent='Sett'"><img src="../assets/Settingsicon.png"></a></li>
    </ol>
    </div>
</div>
</template>

<script>
import Calen from '../components/Calen'
import Memb from '../components/Memb'
import Proj from '../components/Proj'
import Sett from '../components/Sett'
import Teams from '../components/Teams'
import Dash from '../components/Dash'
import Maain from '../components/Maain'
import TopHeader from '../components/Top-header'
import Abou from '../components/Abou'
    export default {
         name: 'Secret',
  components: {
      
     TopHeader,
     Maain,
     Dash,
     Calen,
     Memb,
     Proj,
     Sett,
     Abou,
     Teams
      },    
      data: function(){
          return{
              dynamicComponent: "Maain"
          }
      }   

    }

    
      
    
</script>

<style lang="css" scoped>
.main{
   position: absolute;
   width: 100%;
   height: 722px;
   right: 0%;
   top: 0%;
background-color: #ffffff;
}
.heder{
    position: absolute;
width: 16%;
height: 3em;
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