<template>
     <div class="about">
    
  </div>
  
</template>

<script>
  import { db } from '../main';
 
    export default {
        data() {
            
            return {  

                 showModal: false,
               
                  Projects: [],
                proj: {
                    true:'false',
                    
                },
                 Teams:[],
                  team: {
                    true:'false'
                },
                 active: false,
            }
        },
          created() {
             this.Projects = [];
            db.collection('proj').doc(this.$route.params.id).get().then(doc => {
              console.log(doc.data())
                    this.Projects.push({
                        key: doc.id,
                        name: doc.data().name,
                        true: doc.data().true,
                        email: doc.data().email,
                        description: doc.data().description,
                        phone: doc.data().phone
                    
                });
            })
           
        },
         deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("proj").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            },
        
      
    }
    
      
</script>