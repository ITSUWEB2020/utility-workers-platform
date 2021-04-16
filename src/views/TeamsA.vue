<template>
   <div class="maain">
     <div  c v-for="team in Teams" :key="team.key">
       <p>{{team.name}}</p>
        <div class="maaain">
           
        </div>
        </div>
   </div>
</template>

<script>
  import { db } from '../main';
   
    export default {
         data: function() {
            
            return {  
                
                 showModal: false,
                
                 Teams:[],
                  team: {
                   
                },
                 active: false,
            }
        },
    
          created() {
            db.collection('Team').doc(this.$route.params.id).get().then(doc => {
              console.log(doc.data())
                    this.Teams.push({
                        key: doc.id,
                        name: doc.data().name,
                        true: doc.data().true,
                        email: doc.data().email,
                        phone: doc.data().phone
                    })
                });
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
.maaain {
  display: flex;
  position: relative;
  width: 96%;
  height: 650px;
  background: #ffffff;
  left: 2%;
  top: 5%;
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
  height: 722px;
  background-color: #bfbfbf;
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