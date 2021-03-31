<template>
    <div class="maain">
      <p class="text1">Teams</p>
      <input type="text" class="tfind" placeholder="       Search team">
      <button type="submit" class="button1"  @click="showModal = true">Add team</button>
      <div>
        <div class="textname">

        <p class="team">Team name</p>
         <p class="mem">Members</p>
          <p class="start">Started</p>

        </div>
        <div class="line"></div>
           <div class="teamlist">
 <tr c v-for="team in Teams" :key="team.key">
                        <td class="td1"><p class="name">{{ team.name }}</p></td>
                        <td class="td2"><p class="name1">{{ team.email }}</p></td>
                        <td class="td3"><p class="name2">{{ team.phone }}</p></td>
                         <td class="td5"><p class="name4">{{ team.true }}</p></td>
                        <td class="td4">
                            
                          <p class="name3"><button class="butt1" @click.prevent="deleteUser(team.key)" >Delete</button></p>
                            
                        </td>
 </tr>
        </div>
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
    
</template>

<script>
  import { db } from '../main';


    export default {
        data() {
            return {
                 showModal: false,
                  Teams: [],
                team: {
                    true:'false'
                }
            }
        },
          created() {
            db.collection('teams').onSnapshot((snapshotChange) => {
                this.Teams = [];
                snapshotChange.forEach((doc) => {
                    this.Teams.push({
                        key: doc.id,
                        name: doc.data().name,
                        true: doc.data().true,
                        email: doc.data().email,
                        phone: doc.data().phone
                    })
                });
            })
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('teams').add(this.team).then(() => {
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
            }
        }
    }
      
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
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
.name3{
    position: absolute;
    left: 50em;
}
.name4{
    position: absolute;
    left: 45em;
}
td{
    max-width: 100%;
    max-height: 700px;
    position: relative;
    padding: 2em;
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
    right: 39%;
    top: 1em;
}
.teamlist{
    position: relative;
    bottom: 2em;
    max-height: 40em;
 
}
.maain{
 position: absolute;
  left:16%;
 width: 84%;
 height: 674px;
 background-color: rgb(252, 252, 252);
}
.teamslist{
    position: relative;
    max-width: 80em;
    left: 30%;
    top: 7em;
}
.text1{
     font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 230%;
line-height: 44px;
position: relative;
right: 43%;
bottom: 3%;
}
.tfind{
    position: relative;
width: 20%;
height: 5%;
right: 38%;
bottom: 3%;

background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
    font-family: Montserrat;
font-style: normal;
font-weight: 500;
}
.button1{
    position: absolute;
width: 10%;
height: 5%;
left: 87%;
bottom: 83.8%;
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
background: #C4C4C4;
border-radius: 18px;
border: none;
cursor: pointer;
}
.line{
    position: absolute;
width: 100%;
height: 0.1%;

top: 32%;

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