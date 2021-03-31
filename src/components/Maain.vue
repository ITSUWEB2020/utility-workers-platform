<template>
    <div class="maain">
      {{ $route.params.id }}
      <div  c v-for="proj in Projects" :key="proj.key">
<ul>
  <li> <p class="teamtxt">Status:</p></li>
  <li><p class="teamtxt">Team:</p></li>
  <li><p class="teamtxt">Location:</p></li>
  <li> <p class="teamtxt">Start Date:</p></li>
   <li> <p class="teamtxt">End Date:</p></li>

</ul>

        <p class="name">{{ proj.name}}</p>
        <p class="team">{{ proj.team}}</p>
         <p class="stdate">{{proj.stdate}}</p>
         <p class="team2">{{ proj.location}}</p>
          <p class="enddate">{{proj.anddate}}</p>
        
         
        
         
   <button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></div>
   <div class="map">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20605.623152012184!2d24.046861971114446!3d49.791651880937614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae80bc7fea9bb%3A0x7d7cb52e56346b96!2sSykhiv%2C%20Lviv%2C%20Lviv%20Oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1616751242642!5m2!1sen!2sua" width="548" height="344" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
   </div>
    </div>
</template>

<script>
  import { db } from '../main';
 
    export default {
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
        mounted() {
    if (localStorage.getItem('reloaded')) {
       
        localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
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
                        team: doc.data().team,
                        description: doc.data().description,
                        location: doc.data().location,
                        stdate: doc.data().stdate,
                        anddate: doc.data().anddate,
                    
                    
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
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.map{
  position: relative;
  bottom: 56%;
  left: 10%;

}
.butt1{
  position: relative;
  width: 158px;
height: 36px;
left: 40%;
bottom: 30em;

background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 4px;
}
ul{
  position: relative;
  list-style: none;
  right: 45%;
  top: 220px;
}
.teamtxt{
  position: relative;
  

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #1A1A1A;
}
.maain{
 position: absolute;
  left:16%;
 width: 84%;
 height: 674px;
 background-color: rgb(255, 255, 255);
}
.name{
   
position: relative;
bottom: 70px;
left: -37%;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

color: #1A1A1A;

}
.team{
  position: relative;
left: -30%;
top: 14px;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
text-decoration-line: underline;

color: #1A1A1A;

}
.team2{
  position: relative;
left: -30%;
top: -20px;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
text-decoration-line: underline;

color: #1A1A1A;

}
.stdate{
  position: relative;
left: -30%;
top: 50px;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
text-decoration-line: underline;

color: #1A1A1A;

}
.enddate{
  position: relative;
left: -30%;
top: 15px;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
text-decoration-line: underline;

color: #1A1A1A;

}
</style>