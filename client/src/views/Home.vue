<template>
<div class="home-page">
    <h1 class="my-7">Latest Posts</h1>

    <v-row justify="start" >
      <v-col cols="4"  v-for="(event, key) in getLatestEvents" :key="key"  >
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
    }

}

</script>

<style>

</style>