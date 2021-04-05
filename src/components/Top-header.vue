<template>
    <div class="main-header">
                <h4 class="manag">Manager</h4>
                <button @click="signOut" class="butt"><img class="logout" src="../assets/exit.png"></button>
                <button @click="signOut" class="for-small-screens"><img class="logout" src="../assets/exit.png"></button>
                
            
    </div>
</template>

<script>
import  firebase from "firebase/app";
import "firebase/auth";
    export default {
        created(){
            firebase.auth().onAuthStateChanged(user=>{
                this.loggedin = !!user;
                //if(user){
                 //   this.loggedin = true;
              //  } else {
              //      this.loggedin = false;
               // }
            })
        },
        data(){
           return{
             
           }
        },
        methods:{
           async signOut(){
               try{
                    const data = await firebase.auth().signOut();
                    console.log(data);
                    this.$router.replace({name:"Login"})
               }catch(err){
                    console.log(err)
               }
              

            }
        }
    }
</script>

<style lang="css">
.main-heder{
  display:flex;
  margin: 0%;

}
.manag{
  color: aliceblue;
}
.logout{
  position: absolute;
  top: -5%;
  left: 15%;
  width: 30px;
  height: auto;
}
.for-small-screens {
        position: absolute;
        left: 90.5%;
        top: 24%;
        width:7%;
        height: 23px;
}
.butt {
        position: absolute;
        left: 77.5%;
        top: 24%;
        text-align:center;
        font-size: 90%;
        text-decoration: none;
        font-weight: 100%;
        background:#31758C;
        display:grid;
        width:5.6%;
        border: #31758C;
        
}
@media(max-width:960px) {
  .butt {
    display:none;
  }
}

@media(min-width:961px) {
  .for-small-screens {
    display:none;
  }
}
</style>