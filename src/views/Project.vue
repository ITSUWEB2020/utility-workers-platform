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
    
          created() {
             this.Projects = [];
            db.collection('Projects').doc(this.$route.params.id).get().then(doc => {
              console.log(doc.data())
                    this.Projects.push({
                        key: doc.id,
                        name: doc.data().projectName,
                        status:doc.data().status,
                        team: doc.data().teamName,
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

.butt1{
  
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
  
  list-style: none;
  right: 45%;
  top: 220px;
}
.teamtxt{
  
  

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #1A1A1A;
}
.maain{
 
 width:100%;
 background-color: rgb(255, 255, 255);
 display:flex;
 flex-direction: column;
 justify-content: center;
}
.name{
   

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