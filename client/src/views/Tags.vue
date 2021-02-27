<template>
<v-container>
    <h2>{{getTagPosts.length}} Posts Tagged with {{$route.params.tag}} <v-icon dark large>mdi-arrow-down</v-icon></h2>

  <v-row justify="start" class="d-flex flex-wrap mt-7 mb-7"> 
      
      <v-col cols="md-4 sm-12"  v-for="(event, key) in getTagPosts" :key="key"  >
            <v-card class="ml-1" >
                
          <v-img :src="event.imageUrl" width="350" :aspect-ratio="10/10"></v-img>
          <v-card-title class="title">{{event.name}}</v-card-title>
          <v-card-subtitle style="color:grey">{{event.timestamp}}</v-card-subtitle>
          <v-card-actions>
            <v-chip class="mx-2" rounded color="grey darken-3" dark v-for="(tag, key) in event.keywords">{{tag}}</v-chip>
          </v-card-actions>
          
          
        </v-card>
      </v-col>
    </v-row>

      
      <v-row justify="center" class="mt-7"> 
          <v-col cols="12" align="center"> <h2>All Tags<v-icon dark medium>mdi-arrow-down</v-icon></h2></v-col>
          
          <v-col  cols="6" align="center" >
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