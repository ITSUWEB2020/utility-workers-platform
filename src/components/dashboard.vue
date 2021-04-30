<template>
   <div class="maain">
 
   </div>
</template>

<script>
  import { db } from '../main';
   
    export default {
         name:'dash',
         data() {
            
            return {  
                
                 showModal: false,
                
                 Teams:[],
                  team: {
                   
                },
                 active: false,
            }
        },
    
          created() {
            
         



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
  position:absolute;
  width: 96%;
  height: 55%;
  background: red;
  left: 2%;
  top: 15%;
  border-radius: 10px;
}
</style>