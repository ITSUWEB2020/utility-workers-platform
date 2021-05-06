<template>
  <div class="maain">
    <p class="Ptext">Projects</p>
    <div class="maaain">
      <input type="text" class="tfind" placeholder="       Search project" />
      <button type="submit" class="button1" @click="showModal = true">
        Add project
      </button>
      <div>
         <table class="table_dark2">
   <tr>
    <th>Name</th>
    <th>Team</th>
    <th>Started</th>
    <th>Status</th>
    <th></th>
    </tr>
   <tr  c v-for="proj in Projects" :key="proj.key"  >
    <td>{{proj.name}}</td>
    <td>{{ proj.team}}</td>
    <td>{{ proj.location}}</td>
    <td>{{proj.status}}</td>
     <td> <button class="butt1" @click.prevent="RoutTo(proj.key)">
                    About
                  </button></td>
    </tr> 

         </table>
      </div>
    </div>

    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <form novalidate="true" @submit.prevent="onFormSubmit">
        <div class="modal" v-if="showModal">
          <p class="nttext">Create a new Project</p>

          <p class="text2">Enter project name:</p>
          <input type="text" class="inpname" v-model="projects.projectName" />
          <p class="text3">Executive team:</p>
          <select class="inpname1" v-model="projects.teamName">
            <option c v-for="team in Teams" :key="team.key">
              <p class="name">{{ team.name }}</p>
            </option>
          </select>
          <p class="text4">Location:</p>
          <input type="text" class="inpname2" v-model="projects.location" />
          <p class="textdate">Start Date:</p>
          <p class="textdateend">End Date:</p>
          <p class="textcat">Category of project</p>
          <select type="date" class="inpcat">
            <option></option>
          </select>
          <p class="textprior">Priority</p>
          <select type="date" class="inppr">
            <option></option>
          </select>
          <input type="date" class="inpnamedate" v-model="projects.start" />
          <input type="date" class="inpnamedate2" v-model="projects.end" />
          <p class="text5">Description:</p>
          <textarea
            type="text"
            class="inpname4"
            v-model="projects.description"
          ></textarea>
          <a class="button" @click="showModal = false"> Cancel </a>

          <button class="butsub" type="Submit">Add</button>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
import { db } from "../main";
import routes from "../router/index.js";

export default {
    name:'Proj',
  data() {
    return {
      showModal: false,

      Projects: [],
      projects: {
        status: "inprogress",
      },
      Teams: [],
      team: {
        true: "false",
      },
      active: false,
    };
  },
  created() {
    db.collection("Projects").onSnapshot((snapshotChange) => {
      this.Projects = [];
      snapshotChange.forEach((doc) => {
        this.Projects.push({
          key: doc.id,
          name: doc.data().projectName,
          status: doc.data().status,
          team: doc.data().teamName,
          description: doc.data().description,
          location: doc.data().location,
          stdate: doc.data().stdate,
          anddate: doc.data().anddate,
        });
      });
    }),
      db.collection("Team").onSnapshot((snapshotChange) => {
        this.Teams = [];
        snapshotChange.forEach((doc) => {
          this.Teams.push({
            key: doc.id,
            name: doc.data().name,
          });
        });
      });
  },

  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("Projects")
        .add(this.projects)
        .then(() => {
          alert("Team successfully created!");
          this.projects.projectName = "";
          this.projects.teamName = "";
          this.projects.location = "";
          this.projects.description = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("Projects")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    RoutTo(key) {
      routes.push({
        name: "project",
        params: {
          id: key,
        },
      });
    },
  },
};
</script>

<style lang="css" scoped>
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
.table_dark2 td {
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
.table_dark2 tr:last-child td {
  border-bottom: none;
}
.table_dark2 td:last-child {
  border-right: none;
}
.table_dark2 tr:hover td {
  text-decoration: underline;
}

@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.maaain {
  position: absolute;
  width: 96%;
  height: 600px;
  background: #ffffff;
  left: 2%;
  top: 14%;
  border-radius: 10px;
}
.name8{
  width: 6em;
  border: 2px #34C759 solid;
  border-radius: 20px;
  background-color: #34C759;
  color: white;
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
.butt1 {
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #1a1a1a;
}
.inpnamedate {
  position: absolute;
  width: 20%;
  height: 30px;
  top: 49%;
  right: 75%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 3px;
}
.inpcat {
  position: absolute;
  width: 20%;
  height: 30px;
  top: 49%;
  right: 29%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 3px;
}
.inppr {
  position: absolute;
  width: 20%;
  height: 30px;
  top: 49%;
  right: 5%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 3px;
}
.inpnamedate2 {
  position: absolute;
  width: 20%;
  height: 30px;
  top: 49%;
  right: 52%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 3px;
}
.name {
  position: relative;
  
}
.name1 {
  position: relative;
  
}
.name2 {
  position: relative;

}
.name3 {
  position: relative;
  
}

.name9{
  font-weight: 600;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    
}
.teamlist1 {
    border-collapse: collapse;
    border-spacing: 0;
    width: 70%;
    left: -1em;
    
}

th, td {
    text-align: center;
    padding: 8px;

}


.team {
 height: 15px;
  width: 200px;
  position: relative;
  top: 1em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  letter-spacing: 0.04em;

  /* Black/light */

  color: #19191a;
}
.mem {
  height: 40px;
  width: 40px;
  position: relative;
  bottom: 1.1em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;


  letter-spacing: 0.04em;

  /* Black/light */

  color: #19191a;
}
.start {
  height: 30px;
  position: relative;
  left: 55%;
  bottom: 3.5em;
  width: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  letter-spacing: 0.04em;

  /* Black/light */

  color: #19191a;
}

.textname {
  position: relative;
   max-height: 40em;
  top: 2em;
  width: 60em;
}
.teamlist {
  position: relative;
  max-height: 40em;
  top: 2em;
  right: 20px;
}
.teamlist1 {
  position: relative;
  max-height: 40em;
  top: 2em;
  right: 100px;
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
.teamslist {
  position: relative;
  max-width: 80em;
  left: 30%;
  top: 7em;
}
.text1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 230%;
  line-height: 44px;
  position: relative;
  right: 43%;
  bottom: 3%;
}
.tfind {
  position: relative;
  width: 20%;
  height: 5%;
  right: 38%;
  top: 3%;

  background: #ffffff;
  border: 1px solid #1a1a1a;
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
.line {
  position: absolute;
  left: 2em;
  width: 96%;
  height: 0.1%;

  top: 22%;

  background: #b3b3b3;
  border-radius: 1px;
}
.line2 {
  position: absolute;
  width: 30em;
  height: 0.1%;
  right: 200%;

  background: #b3b3b3;
  border-radius: 1px;
}

.butsub {
  cursor: pointer;
  position: relative;
  top: 30%;
  left: 35%;
  width: 10%;
  height: 25px;
  background: #c4c4c4;
  border-radius: 18px;
  border: none;
}
.inpname {
  position: absolute;
  width: 40%;
  height: 30px;
  top: 20%;
  right: 56%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 12px;
}
.inpname1 {
  position: absolute;
  width: 40%;
  height: 30px;
  top: 20%;
  right: 5%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 3px;
}
.inpname2 {
  position: absolute;
  width: 91%;
  height: 30px;
  top: 35%;
  right: 5%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 12px;
}
.inpname4 {
  position: absolute;
  width: 91%;
  height: 100px;
  top: 64%;
  right: 5%;
  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 12px;
}
.nttext {
  position: relative;
  right: 28%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 180%;
}
.text2 {
  position: relative;
  right: 34%;
  top: 2%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}
.textdate {
  position: relative;
  right: 39%;
  top: 14%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}
.textdateend {
  position: relative;
  right: 16%;
  top: 8.2%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}

.textcat {
  position: relative;
  left: 10%;
  top: 2.6%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}
.textprior {
  position: relative;
  left: 30%;
  top: -3%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}

.text3 {
  position: relative;
  right: -16%;
  bottom: 4%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}
.text4 {
  position: relative;
  right: 39.5%;
  top: 6%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}
.text5 {
  position: relative;
  right: 38.5%;
  top: 5%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
}

.button {
  cursor: pointer;
  position: relative;
  top: 30%;
  left: 31%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 100%;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;

  color: #1a1a1a;
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
  background: #ffffff;
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
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>