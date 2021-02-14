<template>
  <div class="home">
    <v-row>
      <v-col cols="3" v-for="(event, key) in events" :key="key">
         <v-card  class="mt-7 mx-2" > 
           <v-img :aspect-ratio="3/4" :src="event.imageUrl" fluid></v-img>   
         </v-card>
      </v-col>
    </v-row>
 
   
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Home',
  components: {
   
  },
  mounted(){
    axios.get('http://127.0.0.1:5000/gallery')
    .then(data=>{
      this.$store.state.events = data.data.reverse()
    })
  },
  computed:{
    events(){
      return this.$store.state.events;
    }
  }

}
</script>
