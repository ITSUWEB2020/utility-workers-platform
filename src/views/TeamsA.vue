<template>
  <div class="maain">
    <div c v-for="team in Teams" :key="team.key">
      <p class="Tname">{{ team.name }}</p>
      <div class="maaain">
        <button type="submit" class="button1" @click="showModal = true">
          Add project
        </button>
        <table class="teamlist1">
          <tr>
            <td class="td3">
              <p class="name9">Project name</p>
            </td>
            <td class="td3">
              <p class="name9">Team</p>
            </td>
            <td class="td3">
              <p class="name9">Location</p>
            </td>
            <td class="td3">
              <p class="name9">Status</p>
            </td>

            <!-- <p class="name3"><button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></p> -->
          </tr>
        </table>
        <div class="line"></div>
      </div>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data: function () {
    return {
      showModal: false,

      Teams: [],
      team: {},

      membersId: [],
      members: [],
      active: false,
    };
  },

  created() {
    db.collection("Team")
      .doc(this.$route.params.id)
      .get()
      .then((doc) => {
        console.log("Team Data", doc.data());
        this.membersId = doc.data().Members;
      })
      .finally(() => {
        this.membersId.forEach((a) => {
          db.collection("Members")
            .doc(a)
            .get()
            .then((data) => {
              this.members.push(data.data());
            });
        });
      });

    
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("proj")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");

            this.$router.replace({ name: "Secret" });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.maaain {
  position: absolute;
  width: 96%;
  height: 55%;
  background: #ffffff;
  left: 2%;
  top: 15%;
  border-radius: 10px;
}
.line {
  position: absolute;
  left: 2em;
  width: 96%;
  height: 0.1%;

  top: 23%;

  background: #b3b3b3;
  border-radius: 1px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 71%;
}
.teamlist1 {
  position: relative;
  border-collapse: collapse;
  border-spacing: 0;
  width: 80%;
  left: -1em;
  top: 9%;
}
.name9 {
  font-weight: 600;
  font-family: Montserrat;
}
th,
td {
  text-align: center;
  padding: 8px;
}
.main {
  position: absolute;
  width: 96%;
  height: 40%;
  background: #ffffff;
  left: 2%;
  top: 75%;
  border-radius: 10px;
}
.Tname {
  position: relative;
  right: 42%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 550;
  font-size: 36px;
  line-height: 56px;
  /* identical to box height, or 156% */

  letter-spacing: 0.04em;

  /* Grey/very dark */

  color: #4c4c4d;
}
.list {
  position: relative;
  left: 19%;
  width: 10em;
}
.map {
  position: relative;
  left: 42%;
  bottom: 65%;
}
.butt1 {
  position: relative;
  width: 158px;
  height: 36px;
  left: 40%;
  bottom: 30em;

  background: #ffffff;
  border: 1px solid #1a1a1a;
  box-sizing: border-box;
  border-radius: 4px;
}
ul {
  list-style: none;
}
.teamtxt {
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

  color: #19191a;
}
.teamtxt1 {
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
  top: 0;
  width: 84%;
  height: 100%;
  background-color: #bfbfbf;
  background-size: 100%;
  overflow: auto;
}
.name {
  width: 10em;
  position: relative;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #1a1a1a;
}
.team {
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

  color: #1a1a1a;
}
.team2 {
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
  color: #1a1a1a;
}
.stdate {
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
  color: #1a1a1a;
}
.enddate {
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
  color: #1a1a1a;
}
.button1 {
  position: absolute;
  width: 10%;
  height: 7%;
  left: 88%;
  bottom: 88%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  background: #37b0d9;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  color: #ffffff;
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
</style>