<template>


    <v-app id="app" style="margin-left:50px;margin-right:50px;margin-top:40px;">
     
    <Navbar />
   
   <router-view></router-view>
  
  </v-app>

</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
   
  },

  data: () => ({
    //
  }),
};
</script>
<style>

:root {  
  --red: #ff6f69;  
  --beige: #ffeead;  
  --yellow: #ffcc5c;  
  --dark:rgb(39, 39, 39);
    --wh:white;
    --gr:grey;
 
}
body,#app {
  background:var(--dark);
  color:white;

}


</style>
