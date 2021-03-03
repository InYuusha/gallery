<template>
<v-container style="position:absolute; top:10%">
     <h2>Add a Post</h2>
    <v-row align="center" style="margin-top:20px">
       
        <v-col cols="md-6 sm-12">

        <v-form @submit="redirectBack()" style="width:100%" :action="`${$store.state.backendHost}/post`" method="post" enctype="multipart/form-data">
        
        <v-file-input width="50%" height="80%" @change="viewImg" c name="img" type="file" outlined accept="image/" label="Selct a Cover"></v-file-input>
        <v-text-field  name="name" type="text" clearable outlined dark placeholder="Title"></v-text-field>
         <v-textarea name="description" v-model="description" type="text" auto-grow outlined clearable color="white" placeholder="Description"></v-textarea>
         <v-text-field class="text-lowercase"  v-model="tag" @keyup="ifSpace" clearable outlined dark placeholder="Tags"> </v-text-field>
        
        <div><v-chip v-for="(tag,key) in tags" dark>{{tag}}<v-icon @click="removeTag(tag)">mdi-close-circle</v-icon></v-chip></div>
        <br>
        <v-btn @submit="$router.push('/')" type="submit" >Post</v-btn>
         <v-text-field type="hidden" name="keywords" v-for="(tag,key) in tags" :value="tag"></v-text-field>

      </v-form>    
    </v-col>

    <v-col cols="md-6 sm-12">
        <img id="output" width="500px">
    </v-col>
    

</v-row>
</v-container>

</template>

<script>
import axios from 'axios';
export default{
    data:()=>({
        tag:"",
        tags:[],
        name:'',
        description:'',
        img:""

    }),
   
   methods:{
        ifSpace(e){
            if((e.keyCode==13||e.keyCode==32||e.keyCode==188) && this.tag!=''){
                while(this.tag.indexOf(' ')!=-1||this.tag.indexOf(',')!=-1){
                    this.tag = this.tag.replace(' ','')
                    this.tag = this.tag.replace(',','')

                }
                this.tags.push(this.tag)
                this.tag=""
            }

        },
           removeTag(tag){
        let pos =this.tags.indexOf(tag)
        this.tags.splice(pos,1)
            },

           /* post(){
                console.log({
                    name:this.name,
                    description:this.description,
                    keywords:this.tags,
                    img:this.img
                })
                axios.post({
                    name:this.name,
                    description:this.description,
                    keywords:this.tags,
                    img:this.img
                })
            },
            addFile(e){
                e.target.files[0];
                this.img=e.target.files[0];
                
            } */
            viewImg(){
                    var input = event.target;
                    

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);

            },
            redirectBack(){
                this.$router.push('/')
            }

                       

    }
 

}

</script>