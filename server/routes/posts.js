const express = require('express')
const router = express.Router()


const path = require('path')
const { uploadData, getAllPosts ,getOnePost,getLatest} = require('../Controllers/postHandler')
const upload = require('../config/multer')




//routes

//The first page You get in
router.get('/',(req,res)=>{
    res.send("Hello World")
  
})

//post data
router.post('/post',upload.single('img'),uploadData);

//get all posts
router.get('/gallery',getAllPosts);

//get one posts
router.get('/gallery/:id',getOnePost)

//get latest three posts
router.get('/latest',getLatest)



//exports
module.exports = router