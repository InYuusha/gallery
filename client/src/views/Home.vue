<template>
<div class="home-page">


  <v-row class="d-flex flex-reverse mt-14 mb-4">
    <v-col cols="md-5 sm-12" align="center">
      <v-img :aspect-ratio="10/12" width="300" :src="getRandomPost.imageUrl"></v-img>
  </v-col>

  <v-col cols="md-5 sm-12" >
    
      <v-card-title style="color:white">{{getRandomPost.name}}</v-card-title>
      <v-card-subtitle  style="color:grey">{{getRandomPost.timestamp}}</v-card-subtitle>
      <v-card-subtitle style="color:white">{{getRandomPost.description}}</v-card-subtitle>
    
  </v-col>
  </v-row>




  <v-row align="center" >
    <h4 class="my-7">Latest Posts <v-icon medium dark >mdi-arrow-down</v-icon></h4> 
 
  <v-spacer></v-spacer>
  
    <v-btn  align="end" dark icon @click="$router.push('/all')" class="text-uppercase mx-7 font-size-34">view all</v-btn>
  </v-row>


    <v-row justify="start" class="d-flex flex-wrap">
      <v-col cols="md-4 sm-12"  v-for="(event, key) in getLatestEvents" :key="key"  >
            <v-card  class="ml-1" style="border-radius:15px;padding:10px;" >
                
          <v-img :src="event.imageUrl" :aspect-ratio="10/10"></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions >
            <v-btn dark  @click="getPostWithTag(tag)" class="mx-1"  rounded color="grey darken-3" v-for="(tag, key) in event.keywords">{{tag}}</v-btn>
          </v-card-actions>
          
          
        </v-card>
      </v-col>
    </v-row>
</div>

</template>

<script>
import axios from 'axios'

export default{
    mounted(){
    try{
        axios.get('http://127.0.0.1:5000/random')
      .then(rand=>{
        
        this.$store.state.randPost = rand.data[0]
        
      })
    }
    catch(err){
      console.log(err)
    }
      try{
          axios.get('http://127.0.0.1:5000/latest')
        .then(data=>{
          
            this.$store.state.latestEvents = data.data
        })
      }
      catch(err){
        console.log(err)

      }
    },
    computed:{
        getLatestEvents(){
            return this.$store.state.latestEvents;
        },
        getRandomPost(){
          return this.$store.state.randPost;
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
.title {
  color:var(--wh)
}

</style>