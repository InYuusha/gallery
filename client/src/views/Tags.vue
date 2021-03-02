<template>
<v-container>
    <h2 class="mt-14"><v-icon dark  class="mr-7" @click="$router.go(-1)">mdi-arrow-left</v-icon>{{getTagPosts.length}} Posts Tagged with {{$route.params.tag}} <v-icon dark large>mdi-arrow-down</v-icon></h2>

  <v-row justify="start" class="d-flex flex-wrap mt-7 mb-7"> 
      
      <v-col cols="md-4 sm-12"  v-for="(event, key) in getTagPosts" :key="key"  >
            <v-card dark class="ml-1" >
                
          <v-img :src="`http://127.0.0.1:5000/img/${event._id}`" width="350" :aspect-ratio="10/10"></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions>
            <v-row class="d-flex flex-wrap mx-2 my-4">
            <v-chip class="mx-2 my-2" rounded color="grey darken-3" dark v-for="(tag, key) in event.keywords">{{tag}}</v-chip>
            </v-row>
          </v-card-actions>
          
          
        </v-card>
      </v-col>
    </v-row>

      
      <v-row justify="center" class="my-7"> 
          <v-col cols="12" align="center"> <h2>All Tags<v-icon dark medium>mdi-arrow-down</v-icon></h2></v-col>
          
          <v-col  cols="md-6 sm-12" align="center" class="d-flex flex-wrap" >
              <v-chip class="mx-1" small v-for="(tag,key) in getAllTags" :key="key" @click="getPostWithTag(tag)" rounded color="grey darken-3" dark>{{tag}}</v-chip>

          </v-col>
    
    </v-row>

</v-container>
</template>

<script>

export default{
     
computed:{
    getTagPosts(){
       return this.$store.state.tagPosts
    },
    getAllTags(){
        return this.$store.state.tags
    }
},
methods:{
     getPostWithTag(tag){
       
      this.$router.push(`/tags/${tag}`)
      window.location.reload()
      
      
      

    }
}


}
</script>
<style>
.title {
  color:var(--wh)
}
</style>