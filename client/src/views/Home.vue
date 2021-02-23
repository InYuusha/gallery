<template>
<div class="home-page">
    <h1 class="my-7">Latest Posts <v-icon medium dark >mdi-arrow-down</v-icon></h1>

    <v-row justify="start" >
      <v-col cols="4"  v-for="(event, key) in getLatestEvents" :key="key"  >
            <v-card class="ml-1" >
                
          <v-img :src="event.imageUrl" :aspect-ratio="10/10"></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions>
            <v-btn  @click="getPostWithTag(tag)" class="mx-1" outlined rounded color="purple lighten-2" v-for="(tag, key) in event.keywords">{{tag}}</v-btn>
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
        axios.get('http://127.0.0.1:5000/latest')
        .then(data=>{
            this.$store.state.latestEvents = data.data
        })
    },
    computed:{
        getLatestEvents(){
            return this.$store.state.latestEvents;
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