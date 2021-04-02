<template>
  <div class="maain">
    <p class="Ptext">Projects</p>
    <div class="maaain">
      <input type="text" class="tfind" placeholder="       Search project" />
      <button type="submit" class="button1" @click="showModal = true">
        Add project
      </button>
      <div>
        <div class="textname">
          <p class="team">Project name</p>
          <p class="mem">Team</p>
          <p class="start">Location</p>
        </div>
        <div class="line"></div>
        <keep-alive>
          <div class="teamlist">
            <tr c v-for="proj in Projects" :key="proj.key">
              <td class="td1">
                <p class="name">{{ proj.name }}</p>
              </td>
              <td class="td2">
                <p class="name1">{{ proj.team }}</p>
              </td>
              <td class="td3">
                <p class="name2">{{ proj.location }}</p>
              </td>
              <td class="td5">
                <p class="name4">{{ proj.true }}</p>
              </td>
              <td class="td4">
                <p class="name3">
                  <button class="butt1" @click.prevent="RoutTo(proj.key)">
                    About
                  </button>
                </p>
                <!-- <p class="name3"><button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></p> -->
              </td>
            </tr>
          </div>
        </keep-alive>
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
          <input type="text" class="inpname" v-model="proj.name" />
          <p class="text3">Executive team:</p>
          <select class="inpname1" v-model="proj.team">
            <option c v-for="team in Teams" :key="team.key">
              <p class="name">{{ team.name }}</p>
            </option>
          </select>
          <p class="text4">Location:</p>
          <input type="text" class="inpname2" v-model="proj.location" />
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
          <input type="date" class="inpnamedate" v-model="proj.stdate" />
          <input type="date" class="inpnamedate2" v-model="proj.anddate" />
          <p class="text5">Description:</p>
          <textarea
            type="text"
            class="inpname4"
            v-model="proj.description"
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
      proj: {
        true: "false",
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
        .add(this.proj)
        .then(() => {
          alert("Team successfully created!");
          this.proj.name = "";
          this.proj.team = "";
          this.proj.location = "";
          this.proj.true = "";
          this.proj.description = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("proj")
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
  position: absolute;
  left: 5em;
}
.name1 {
  position: absolute;
  left: 18em;
}
.name2 {
  position: absolute;
  left: 33em;
}
.name3 {
  position: absolute;
  left: 30em;
}
.name4 {
  position: absolute;
  left: 45em;
}
td {
  max-width: 100%;
  max-height: 700px;
  position: relative;
  padding: 2em;
}

.team {
  position: relative;
  height: 10%;
  right: 1em;
  top: 2em;
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
  position: relative;
  left: 16em;
  bottom: 0.5em;
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
.start {
  position: relative;
  left: 73em;
  bottom: 3.2em;
  height: 30px;
  width: 100px;
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
  right: 39%;
  top: 1em;
}
.teamlist {
  position: relative;
  max-height: 40em;
  bottom: 3em;
  right: 20px;
}
.maain {
  position: absolute;
  left: 16%;
  top:0;
  width: 84%;
  height: 722px;
  background-color: #bfbfbf;
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