<template>
  
        <form @submit.prevent="pressed">
            <div v-if="error" class="error"> {{error.message}}</div>
            <div>
                <input id="name" class="input" type="email" placeholder="Login" v-model="email">
            </div>
            <div>
                <input class="inp2" type="password" placeholder="Password" v-model="password">
            </div>
             <button type="submit" class="but" >Get values</button>
        </form>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
  methods:{
     async pressed(){
         try{
              const user = firebase.auth().createUserWithEmailAndPassword(this.login, this.password)
              console.log(user)
              this.$router.replace({name: "secret"});
         }catch(err){
 console.log(err)
         }
     
      }
  },

  data() {
      return{
        email:"",
        password:"",
        error:""
      }
   
  }
    }
</script>

<style lang="css" scoped>
 .error{
     color: red;
     font-size: 18px;
 }
</style>