<template>
  <v-row justify="start">
      <v-col cols="md-1 sm-12" class="mx-2" style="display:flex; justify-content:start" >

        <a><v-btn x-small dark rounded color="grey darken-3" @click="dialog=true" >A Vue Creation</v-btn></a>

        </v-col>
      <v-col cols="md-10 sm-12" style="display:flex;justify-content:end">

        <v-btn color="grey darken-2" small  class="text-no-wrap secondary mr-2" @click="$router.push('/')"  dark  >Home</v-btn>
        <v-btn color="grey darken-2" small class="text-no-wrap secondary mr-2" @click="$router.push('/all')"  dark  >Blogs</v-btn>
        <v-btn color="grey darken-2" small class="text-no-wrap secondary mr-2" @click="$router.push('/post')"  dark  >Add</v-btn>

      </v-col>
     
      <v-dialog v-model="dialog" width="md-90">
        <v-sheet >
          <v-sheet  align="center" color="grey darken-4" dark class="text-uppercase font-weight-bold py-3">A vue creation</v-sheet>
          <v-sheet class="py-2  px-4">
             
            Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
            <br><br>
            <v-btn color="grey darken-3" dark @click="dialog=false">Ok</v-btn>
          </v-sheet>
        </v-sheet>
        <div></div>
     
    </v-dialog>
      
    </v-row>

</template>

<script>
export default{

    data:()=>({
        navItems:[
            
            {name:'Contact',link:'/contact'},
            {name:'Blogs',link:'/all'}
        ],
        dialog:false
    })

}
</script>

<style>
#geek{
    font-size:18px;
    font-weight:bolder;
     font-family: 'Open Sans', sans-serif;
}



  

</style>