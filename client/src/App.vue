<template>
  <v-app style="margin-left:50px;margin-right:50px;margin-top:40px;">
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
