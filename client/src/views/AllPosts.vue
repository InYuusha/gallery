<template>
  <div class="all posts" >
    
    <h2 class="mb-7" id="blog">Blog posts <v-icon dark medium>mdi-arrow-down</v-icon></h2>
  
 
      <v-row justify="start" >
      <v-col cols="4"  v-for="(event, key) in events" :key="key"  >
            <v-card class="ml-1 elevation-24" >
          <v-img :src="event.imageUrl" :aspect-ratio="10/10"></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions>
            <v-chip id="chip" class="mx-1" outlined rounded color="purple lighten-2" v-for="(tag, key) in event.keywords" @click="getPostWithTag(tag)">{{tag}}</v-chip>
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
  },
  methods:{
    getPostWithTag(tag){
      this.$router.push(`/tags/${tag}`)

    }
  }

}
</script>

<style>
#blog{
   font-family: 'Open Sans Condensed', sans-serif;
}
.title {
  color:var(--wh)
}

</style>
