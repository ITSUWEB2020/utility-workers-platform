<template>
    <div class="dash">
      <div class="about">
    <h1>{{ $route.params.id }}</h1>
    <h1>  <div  c v-for="proj in Projects" :key="proj.key"><p class="name">{{ proj.name}}</p><p class="name">{{ proj.email}}</p>
   <button class="butt1" @click.prevent="deleteUser(proj.key)" >Delete</button></div></h1>
  </div>
    </div>
</template>

<script>

 import { db } from '../main';
    export default {
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
                        phone: doc.data().phone,
                        stdate: doc.data().stdate,
                        anddate: doc.data().anddate,
                    
                });
            })
           
        },
    }
</script>

<style lang="css" scoped>
.dash{
 position: absolute;
  left:16%;
 width: 84%;
 height: 674px;
 background-color: rgb(255, 0, 0);
}
</style>