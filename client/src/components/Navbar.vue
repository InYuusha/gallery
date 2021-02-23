<template>
  <v-row justify="end">
      <v-col><a><p class="text-uppercase" id="geek">code geek</p></a></v-col>

      <v-col cols="1"><span @click="$router.push('/')" class="home">Home</span></v-col>

      <v-col cols="1" v-for="(item, key) in navItems" class="mx-1">
        <v-btn dark text :to="item.link" id="nav">{{item.name}}</v-btn>
             
      </v-col>
    </v-row>

</template>

<script>
export default{

    data:()=>({
        navItems:[
            
            {name:'Contact',link:'/contact'},
            {name:'Blogs',link:'/all'}
        ]
    })

}
</script>

<style>
#geek{
    font-size:18px;
    font-weight:bolder;
     font-family: 'Open Sans', sans-serif;
}


.home{
  padding:15px;
    background-color:rgb(160, 110, 240);
    color:white;
    text-decoration:none;
    border-radius:10px;
    width:80%;
    cursor: pointer;
}
  

</style>