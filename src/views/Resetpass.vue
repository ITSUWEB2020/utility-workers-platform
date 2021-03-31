<template>
  
       <div>
        <form @submit.prevent="pressed">
            <div class="text">
            <p class="textwelc">Reset Password</p>
            </div>
             <div class="login">
                <input type="email" class="input" placeholder="    Write your email" v-model="email">
            </div>
            <button type="submit" class="but">Reset</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span class="signupbut">Or <router-link to="/Login" class="butsu">Sign In</router-link></span>
        <div class="line"></div>
    </div>
</template>

<script>
import  firebase from "firebase/app";
import "firebase/auth";
    export default {
  methods:{
     async pressed(){
         try{
              const user = firebase.auth().sendPasswordResetEmail(this.email)
              console.log(user)
              alert("Check your email")
              this.$router.replace({name: "Login"});
         }catch(err){
 console.log(err)
         }
     
      }
  },

  data() {
      return{
        email:"",
        error:""
      }
   
  },
  beforeCreate: function() {
        document.body.className = 'Register';
    }
 }
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.text{
position: relative;
    left: 0%;
    top: 6em;
}
.textwelc{

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;

}
HTML {
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
}
.input{
     position: relative;
    width: 24.7em;
    height: 3.5em;
    left: 0%;
    top: 8.8em;

    background: white;
    border: 1px solid #808080;
    box-sizing: border-box;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.04);
    border-radius: 8px 8px 0px 0px;

     font-family: 'Montserrat', sans-serif;
    

}
.inp2{
    position: relative;
    width: 24.7em;
    height: 3.5em;
    left: 0%;
    top: 9em;

    background: white;
    border: 1px solid #808080;
    box-sizing: border-box;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 8px 8px;
    font-family: 'Montserrat', sans-serif;

}
.but{
    position: relative;
   width: 24.7em;
    height: 3.5em;
    left: 0%;
    top: 10em;

   background: linear-gradient(180deg, #0088CC 0%, #006699 100%, #006699 100%);
border: 1px solid #006699;
box-sizing: border-box;
box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.04);
border-radius: 8px;
 font-family: 'Montserrat', sans-serif;
 color: white;
    
}
.line{
   position: relative;
    width: 21%;
    height: 0.1px;
    left: 39.5%;
    top: 8em;

background: #808080;
}
.signupbut{
 position: relative;
    right: 0%;
    top: 10em;
    color: #FFFFFF;
}
.butsu{
     font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 15px;
/* identical to box height */

text-decoration-line: underline;

color: #CCCCCC !important;

}
.forgbut{
    position: relative;
    left: 4.5%;
    top: 10em;
}
</style>