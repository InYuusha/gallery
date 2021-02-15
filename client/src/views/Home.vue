<template>
<div class="home-page">

    <v-row>
        <v-col v-for="(post,key) in latestPosts" :key="key">
            <v-card>

            </v-card>

        </v-col>
    </v-row>
</div>

</template>

<script>
import axios from 'axios'

export default{
    mounted(){
        axios.get()
    }

}

</script>

<style>

</style>