<template>
  <div class="all posts" >
    
    <h2 class="my-7" id="blog"><v-icon @click="$router.go(-1)" class="mr-7" dark>mdi-arrow-left</v-icon>Blog posts <v-icon dark medium>mdi-arrow-down</v-icon></h2>
  
 
      <v-row justify="start" class="d-flex flex-wrap">
      <v-col cols="md-4 sm-6"  v-for="(event, key) in events" :key="key"  >
            <v-card dark class="ml-1 elevation-24" >
          <v-img :src="`${$store.state.backendHost}/img/${event._id}`" :aspect-ratio="10/10" ></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions>
            <v-row class="flex flex-wrap my-4 mx-2">
            <v-chip id="chip" class="mx-1" rounded color="grey darken-3" dark v-for="(tag, key) in event.keywords" :key="key" @click="getPostWithTag(tag)">{{tag}}</v-chip>
           
            <v-btn class="mb-7" fab absolute icon bottom right><v-icon  dark @click="deletePost(event._id)">mdi-trash-can</v-icon></v-btn>
            </v-row>
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
    axios.get(`${this.$store.state.backendHost}/gallery`)
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

    },
    async deletePost(id){
      await axios.delete(`${this.$store.state.backendHost}/gallery/${id}`)
      .then(window.location.reload())
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
