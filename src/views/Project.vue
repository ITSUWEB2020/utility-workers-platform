<template>
   <div class="maain" >
        <div class="maaain">
            
      <div class="list" c v-for="proj in Projects" :key="proj.key">
      <p class="name">{{ proj.name}}</p>
<ul class="teamtxt">
  <li> <p >Status:</p></li>
  <li><p >Team:</p></li>
  <li><p >Location:</p></li>
  <li> <p >Start Date:</p></li>
   <li> <p >End Date:</p></li>
</ul>
 <ul class="teamtxt1" >
          <li><p>{{proj.status}}</p></li>
         <li><p >{{ proj.team}}</p></li>
         <li><p >{{ proj.location}}</p> </li>
         <li><p >{{proj.startDate}}</p> </li>
         <li><p >{{Tasks.end}}</p> </li>
      </ul> 
        
</div >
      
         
   <button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></div>
    <div class="maaain1">

        <table class="table_dark">
  <tr>
    <th>Team</th>
    <th>Time</th>
    <th>Duratioon</th>
    <th>Notes</th>
    </tr>
  <tr  c v-for="task in Tasks" :key="task.key">
    <td>{{task.name}}</td>
    <td>{{task.start}}</td>
    <td>{{task.end}}</td>
    <td>{{task.description}}</td>
    </tr>
  </table>


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
                  Tasks: [],
                   task:{

                   },
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
             this.Tasks = [];
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
                        Tasks: doc.data().Tasks,
                        startDate: doc.data().startDate.toDate(),
                        
  
                });
               
  
            }),

         db.collection("Projects")
      .doc(this.$route.params.id)
      .collection("Tasks")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data())
          this.Tasks.push({
          key: doc.id,
           description: doc.data().description,
           name: doc.data().name,
           start: doc.data().start.toDate(),
           end: doc.data().end.toDate(),
          });
        })
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
.table_dark {
  position: relative;
  width: 100%;
  font-family: Montserrat;
  font-size: 14px;
  text-align: left;
  border-collapse: collapse;
  background: #ffffff;
  margin: 10px;
}
.table_dark th {
 font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

letter-spacing: 0.04em;

/* Black/light */

color: #19191A;
  border-bottom: 1px solid #000000;
  padding: 12px 5em;
  font-family: Montserrat;
}
.table_dark td {
 font-weight: 600;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

letter-spacing: 0.04em;

/* Black/light */

color: #19191A;
  border-bottom: 1px solid #000000;
  padding: 20px 5em;
}
.table_dark tr:last-child td {
  border-bottom: none;
}
.table_dark td:last-child {
  border-right: none;
}
.table_dark tr:hover td {
  text-decoration: underline;
}








.maaain {
  display: flex;
  position: relative;
  width: 96%;
  height: 58%;
  background: #ffffff;
  left: 2%;
  top: 5%;
  border-radius: 10px;
}
.maaain1 {
  display: flex;
  position: relative;
  width: 96%;
  height: 50%;
  background: #ffffff;
  left: 2%;
  top: 12%;
  border-radius: 10px;
}
.list{
  position: relative;
  left: 19%;
  width: 10em;
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

}
.teamtxt{
position: relative;
right: 15em;
top: 3em;
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
.teamtxt1{
  position: relative;
 right: 7em;
 bottom: 9.5em;
font-family: Montserrat;
font-style: normal;

font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: 0.04em;

}
.maain {
  position: absolute;
  left: 16%;
  top:0;
  width: 84%;
  height: 100%;
  background-color: #bfbfbf;
  background-size: 100%;
  overflow: auto;
}
.name{
    width: 10em;
position: relative;
font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;

color: #1A1A1A;

}
.team{
   width: 10em;
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
 width: 10em;
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
 width: 10em;
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
 width: 10em;
color: #1A1A1A;

}
</style>