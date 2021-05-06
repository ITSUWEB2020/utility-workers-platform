<template>
    <div class="maain" >
       <p class="Ptext">Teams</p>
        <div class="maaain">
     
      <button type="submit" class="button1"  @click="showModal = true">Add team</button>
      <div class="lisst">
        <table class="table_dark">
  <tr>
    <th>Team name</th>
    <th>Project</th>
    <th>Members</th>
    <th>Status</th>
    <th></th>
    </tr>
   <tr   c v-for="team in Teams" :key="team.key">
    <td><p >{{ team.name }}</p></td>
    <td ><p >Bear</p></td>
    <td ><p>{{ membName }}</p></td>
    <td ><p >{{ team.Status }}</p></td>
    <td><button class="butt1" @click.prevent="RoutTo(team.key)">
                    About
                  </button></td>
    </tr>
    
  </table>
  </div>
       <transition name="fade" appear>
  <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
 </transition>
 <transition name="slide" appear>
<form @submit.prevent="onFormSubmit">
  <div class="modal" v-if="showModal">
        <p class="nttext">Create a new team</p>
                <p class="text2">Enter team name:</p>
                <input type="text" class="inpname" v-model="team.name">
                <p class="text3">Enter the number of members:</p>
                <input type="text" class="inpname1" v-model="team.email">
                <p class="text4">Enter date:</p>
             <input type="text" class="inpname2" v-model="team.phone">
     <a class="button" @click="showModal = false">
    Cancel
   </a>
   <button class="butsub" type="Submit">Add</button>
  </div>
</form>
 </transition>
 </div>
    </div>
    
</template>

<script>
  import { db } from '../main';
  import routes from "../router/index.js";

    export default {
        name: 'teams',
        data() {
            return {
                 showModal: false,
                 
      Teams: [],
      team: {},
      
      teamName: null,
      membName: [],
      projects: [],
      projectId:[],
      project:{

      },
      membersId: [],
      members: [],
      member:{

      }
            }
        }, 
      /*   created() {
              
            db.collection('Team').onSnapshot((snapshotChange) => {
                this.Teams = [];
                snapshotChange.forEach((doc) => {
                    this.Teams.push({
                        key: doc.id,
                        name: doc.data().name,
                        Members: doc.data().Members
                    })
                });
            })
        }, */
         created() {
              
         
      db.collection("Team")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           console.log("Team Data", doc.data());
        this.membersId = doc.data().Members;
        this.teamName = doc.data().name
        this.Teams.push({
                        key: doc.id,
                        name: doc.data().name,
                        Members: doc.data().Members,
                        Status: doc.data().Status
                    })
        });
    }).finally(() => {
        this.membersId.forEach((a) => {
          db.collection("Members")
            .doc(a)
            .get()
            .then((data) => {
              this.members.push({
                  key: data.id,
                  name: data.data().name,
             } );
             this.membName = data.data().name
            });
            
        });
      });
       db.collection("Team")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           console.log("Team Data", doc.data());
       this.projectId = doc.data().Projects;
        });
    }).finally(() => {
        this.projectId.forEach((a) => {
          db.collection("Projects")
            .doc(a)
            .get()
            .then((data) => {
              this.projects.push({
                  key: data.id,
                  name: data.data().name,
             } );
            });
        });
      });

        },
         
        
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('Team').add(this.team).then(() => {
                    alert("Team successfully created!");
                    this.team.name = ''
                    this.team.email = ''
                    this.team.phone = ''
                    this.team.true = ''
                }).catch((error) => {
                    console.log(error);
                });
            },
            deleteUser(id){ 
              if (window.confirm("Do you really want to delete?")) {
                db.collection("teams").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            },
            RoutTo(key) {
        routes.push({
        name: "team",
        params: {
          id: key,
        },
      });
    },
        }
        
    }
      
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.table_dark {
  position: relative;

  width: 99%;
  font-family: Montserrat;
  font-size: 14px;
  text-align: left;
  border-collapse: collapse;
  margin: 5px;
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
  border-bottom: 1px solid #CACBCC;
  padding: 1.5% 1.4%;
  font-family: Montserrat;
}
.table_dark td {
 font-weight: 600;
font-size: 16px;
line-height: 21px;
/* identical to box height, or 175% */

letter-spacing: 0.04em;
font-weight: 100;
/* Black/light */

color: #19191A;
  border-bottom: 1px solid #CACBCC;
   padding: 1.5% 1.4%;
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
.table_dark2 {
  position: relative;
  width: 99%;
  top: 3em;
  font-family: Montserrat;
  font-size: 14px;
  text-align: left;
  border-collapse: collapse;
  
  margin: 5px;
}
.table_dark2 th {
 font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

letter-spacing: 0.04em;

/* Black/light */

color: #19191A;
  border-bottom: 1px solid #CACBCC;
  padding: 1.5% 1.4%;
  font-family: Montserrat;
}
.lisst{
  padding-top: 5%;
}
.Ptext {
  position: absolute;
  left: 1em;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  /* identical to box height, or 156% */

  letter-spacing: 0.04em;

  /* Grey/very dark */

  color: #4c4c4d;
}
.teamlist {
  position: relative;
  max-height: 40em;
  top: -4em;
  right: 1px;
}
.teamlist1 {
  position: relative;
  max-height: 10em;
  top: -4.5em;
  border-collapse: collapse;
  width: 76.5%;
  left: 1em;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    
}


th, td {
    text-align: center;
    padding: 8px;
    width: 20%;

}
.teamslist {
  position: relative;
  max-width: 80em;
  left: 30%;
  top: 7em;
}
.maaain {
  position: absolute;
  width: 96%;
  height: 600px;
  background: #ffffff;
  left: 2%;
  top: 13%;
  border-radius: 10px;
}
.name8{
      position: absolute;
    left: 5em;
    
  width: 6em;
  border: 2px #34C759 solid;
  border-radius: 20px;
  background-color: #34C759;
  color: white;
}
.butt1{
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 4px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #1A1A1A;

}
.name{
    position: absolute;
    left: 5em;
    
}
.name1{
    position: absolute;
    left: 18em;
}
.name2{
    position: absolute;
    left: 33em;
}
.name5{
   font-weight: 600;
    
}
.name4{
    font-weight: 600;
    
   
     
}
.name9{
  font-weight: 600;
  
}
.name91{
  font-weight: 600;
  padding-left: 10%;
}



.team{
     position: relative;
    height: 10%;
    right: 0.5em;
   
}
.mem{
    position: relative;
    left: 15em;
    bottom: 2em;


}
.start{
     position: relative;
    left: 67em;
    bottom: 4.2em;
    height: 30px;
    width: 100px;
}

.textname{
   
  position: relative;
   max-height: 40em;
  top: -6em;
  width: 60em;
}

.maain{
   position: absolute;
  left: 16%;
  top:0;
  width: 84%;
  height: 722px;
  background-color: #bfbfbf;
}

.text1{
     font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 230%;
line-height: 44px;
position: relative;
right: 43%;
bottom: 16%;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 56px;
/* identical to box height, or 156% */

letter-spacing: 0.04em;

/* Grey/very dark */

color: #4C4C4D;
}
.tfind{
    position: relative;
width: 20%;
height: 5%;
right: 38%;
bottom: 13%;

background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
}
.button1 {
  position: absolute;
  width: 10%;
  height: 5%;
  left: 87%;
  bottom: 87.8%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  background: #37b0d9;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}
.line{
    position: absolute;
width: 96%;
height: 0.1%;

top: 22%;
left: 2%;
background: #B3B3B3;
border-radius: 1px;
}
.line2{
    position: absolute;
width: 30em;
height: 0.1%;
right: 200%;


background: #B3B3B3;
border-radius: 1px;
}







.butsub{
    cursor: pointer;
 position: relative;
top: 61.5%;
left: 35%;
width: 10%;
height: 25px;
background: #C4C4C4;
border-radius: 18px;
border: none;
}
.inpname{
    position: absolute;
width: 91%;
height: 30px;
top: 20%;
right: 5%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.inpname1{
    position: absolute;
width: 91%;
height: 30px;
top: 35%;
right: 5%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.inpname2{
    position: absolute;
width: 91%;
height: 30px;
top: 50%;
right: 5%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.nttext{
    position: relative;
    right: 28%;
    font-family: Montserrat;
font-style: normal;
font-weight: 900;
font-size: 180%;
}
.text2{
    position: relative;
    right: 36%;
    top: 2%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}
.text3{
    position: relative;
    right: 29%;
    top: 11%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}
.text4{
    position: relative;
    right: 39.5%;
    top: 21%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}


.button {
cursor: pointer;
position: relative;
top: 62%;
left: 31%;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 100%;
line-height: 24px;
text-align: center;
text-decoration-line: underline;

color: #1A1A1A;
 
}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 50%;
height: 600px;
 background: #FFFFFF;
box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.24);
border-radius: 32px;
}
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }


.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
</style>