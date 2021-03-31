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
   <keep-alive>
        <li><a @click="dynamicComponent='Maain'" ><img src="../assets/Dashboardicon.png"> Dashboard</a></li>
      </keep-alive>
    </ol>
    </div>
     <div class="for-small-screens">
 <ol class="listfs">
   <keep-alive>
        <li><a @click="dynamicComponent='Maain'" ><img src="../assets/Dashboardicon.png"></a></li>
        </keep-alive>
    </ol>
    </div>
</div>
   
</template>

<script>
  import { db } from '../main';

import Maain from '../components/Maain'
import TopHeader from '../components/Top-header'
    export default {
      components: {
     TopHeader,
     Maain
      }, 
        data: function() {
            
            return {  
                 dynamicComponent: "Maain",
                 showModal: false,
               
                  Projects: [],
                proj: {
                    true:'false',
                    
                },
                 Teams:[],
                  team: {
                    true:'false'
                },
                 active: false,
            }
        },
          created() {
             this.Projects = [];
            db.collection('proj').doc(this.$route.params.id).get().then(doc => {
              console.log(doc.data())
                    this.Projects.push({
                        key: doc.id,
                        name: doc.data().name,
                        true: doc.data().true,
                        email: doc.data().email,
                        description: doc.data().description,
                        phone: doc.data().phone,
                        
                    
                });
            })
           
        },
        methods:{
        deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("proj").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                    this.$router.replace({name:"Secret"})
                })
                .catch((error) => {
                    console.error(error);
                })
              }
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
width: 100%;
height: 3em;
left: 0px;
top: 0px;

background: #31758C;
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
    color: black;
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