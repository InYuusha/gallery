<template>
  <div class="all posts" >
    
    <h2 class="mb-7" id="blog">Blog posts <v-icon>mdi-arrow-down</v-icon></h2>
  
 
      <v-row justify="start" >
      <v-col cols="4"  v-for="(event, key) in events" :key="key"  >
            <v-card class="ml-1" >
          <v-img :src="event.imageUrl" :aspect-ratio="10/10"></v-img>
          <v-card-title>{{event.name}}</v-card-title>
          <v-card-actions>
            <v-chip outlined color="blue lighten-2" v-for="(tag, key) in event.keywords">{{tag}}</v-chip>
          </v-card-actions>
          
          

        </v-card>
      </v-col>
    </v-row>
    



 

    
  </div>
</template>

<script>

import axios from 'axios'
import Navbar from '../components/Navbar'
export default {
  name: 'AllPosts',
  components: {
    Navbar
   
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

<style>
#blog{
   font-family: 'Open Sans Condensed', sans-serif;
}
</style>
