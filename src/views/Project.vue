<template>
    <div class="maain">
   
      <div  c v-for="proj in Projects" :key="proj.key">
<div class="list">
<ul>
  <li> <p class="teamtxt">Status:</p></li>
  <li><p class="teamtxt">Team:</p></li>
  <li><p class="teamtxt">Location:</p></li>
  <li> <p class="teamtxt">Start Date:</p></li>
   <li> <p class="teamtxt">End Date:</p></li>

</ul>
</div>

        <p class="name">{{ proj.name}}</p>
        <p class="team">{{ proj.team}}</p>
         <p class="stdate">{{proj.status}}</p>
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
.list{
  position: relative;
  left: 19%;
}
.map{
  position: relative;
  left: 42%;
  bottom: 65%;
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
  
  list-style: none;
  right: 40%;
  top: 220px;
}
.teamtxt{
  
width: 10em;
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: 0.04em;

/* Black/light */

color: #19191A;
}
.maain{
 
 width:84%;
 height: 600px;
 background-color: rgb(255, 255, 255);
 display:flex;
 flex-direction: column;
 justify-content: center;
}
.name{
   
position: relative;
bottom: 13em;
left: -10%;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

color: #1A1A1A;

}
.team{
 position: relative;
left: -15%;
bottom: 13.6em;
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
left: -14%;
top: -15.6em;
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
left: -15%;
bottom: 18.4em;
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