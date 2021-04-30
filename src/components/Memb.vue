<template>
    <div class="maain">
      <p class="text1">Members</p>
      <div class="maaain"> 
      <input type="text" class="tfind" placeholder="       Search member">
      <button type="submit" class="button1"  @click="showModal = true">Add Member</button>
      <div>
           <div class="textname">
             <tr>
              <td class="td1">
                <p class="name9">Member name</p>
              </td>
              <td class="td1">
                <p class="name9">Role</p>
              </td>
              <td class="td1">
                <p class="name9">Payment</p>
              </td>
               <td class="td1">
                <p class="name9">Projects</p>
              </td>
            
                <!-- <p class="name3"><button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></p> -->
              
            </tr>
       </div>
        <div class="line"></div>
           <div class="teamlist">
 <tr c v-for="member in Member" :key="member.key">
                        <td class="td"><p class="name">{{ member.name }}</p></td>
                        <td class="td"><p class="name">{{ member.role }}</p></td>
                        <td class="td"><p class="name">{{ member.phone }}</p></td>
                         <td class="td"><p class="name1">{{ member.true }}</p></td>
                        <td class="td">
                            
                          <p class="name2"><button class="butt1" @click.prevent="deleteUser(member.key)" >Delete</button></p>
                            
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
        <p class="nttext">Create a new member</p>
                <p class="text2">Enter member name:</p>
                <input type="text" class="inpname1" v-model="member.name">
               <p class="text3">Executive team:</p>
                     <select  class="inpname" v-model="member.team">
                    <option  c v-for="team in Teams" :key="team.key"><p class="name">{{ team.name}}</p></option>
                </select>
                <p class="text4">Role</p>
              <input type="text" class="inpname2" v-model="member.role">
               <p class="text5">Payment</p>
              <input type="text" class="inpname3" v-model="member.phone">
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


    export default {
        data() {
            return {
                 showModal: false,
                  Member: [],
                member: {
                    true:'false'
                },
                   Teams:[],
                  team: {
                    true:'1'
                },
                 active: false,
            }
        },
          created() {
            db.collection('members').onSnapshot((snapshotChange) => {
                this.Member = [];
                snapshotChange.forEach((doc) => {
                    this.Member.push({
                        key: doc.id,
                        name: doc.data().name,
                        true: doc.data().true,
                        email: doc.data().email,
                        phone: doc.data().phone,
                        role: doc.data().role
                    })
                });
            }),
              db.collection('teams').onSnapshot((snapshotChange) => {
                this.Teams = [];
               snapshotChange.forEach((doc) => {
                    this.Teams.push({
                        key: doc.id,
                        name: doc.data().name,
                    })
                });
            })
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('members').add(this.member).then(() => {
                    alert("Member successfully created!");
                    this.member.name = ''
                    this.member.email = ''
                    this.member.phone = ''
                    this.member.true = ''
                    this.member.role = ''
                }).catch((error) => {
                    console.log(error);
                });
            },
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("members").doc(id).delete().then(() => {
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
.inpname3{
      position: absolute;
width: 43%;
height: 30px;
top: 57%;
right: 53%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.td {
  position: relative;
  padding: 1%;
  padding-left: 2em;
  padding-right: 9em;
  left: 5%;
  top: 2em;
}
.td1{
      max-width: 100%;
    max-height: 900px;
    position: relative;
    padding: 2em;
    padding-left: 4em;
    padding-right: 6em;

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
.maaain {
  position: absolute;
  width: 96%;
  height: 600px;
  background: #ffffff;
  left: 2%;
  top: 14%;
  border-radius: 10px;
}
.name{
    position: relative;
    
}
.name1{
    position: absolute;
   right: 4.5em;
}
.name2{
    position: absolute;
   left: 6em;
}
.name3{
    position: absolute;
    left: 50em;
}
.name9{
        position: relative;

font-weight: 600;

/* Black/light */


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

.textname {
  position: relative;
   max-height: 40em;
  width: 60em;
}
.teamlist{
    position: relative;
    bottom: 3em;
    max-height: 40em;
}
.maain {
  position: absolute;
  left: 16%;
  top:0;
  width: 84%;
  height: 100%;
  background-color: #bfbfbf;
  background-size: cover;
}
.teamslist{
    position: relative;
    max-width: 80em;
    left: 30%;
    top: 5em;
}
.text1{
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
.tfind{
    position: relative;
width: 20%;
height: 5%;
right: 38%;
top: 4%;

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

top: 20%;
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
top: 35%;
left: 35%;
width: 10%;
height: 25px;
background: #C4C4C4;
border-radius: 18px;
border: none;
}
.inpname{
    position: absolute;
width: 43%;
height: 30px;
top: 35%;
right: 5%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.inpname1{
    position: absolute;
width: 43%;
height: 30px;
top: 35%;
right: 53%;
    background: #FFFFFF;
border: 1px solid #1A1A1A;
box-sizing: border-box;
border-radius: 12px;
}
.inpname2{
    position: absolute;
width: 43%;
height: 30px;
top: 57%;
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
    right: 33%;
    top: 7%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}
.text3{
    position: relative;
    left: 10%;
    top: -1%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}
.text4{
    position: relative;
    left: 5%;
    top: 13%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}
.text5{
      position: relative;
    right: 40%;
    top: 5%;
    font-family: Montserrat;
font-style: normal;
font-weight: 700;
font-size: 100%;
}


.button {
cursor: pointer;
position: relative;
top: 35%;
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
height: 400px;
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