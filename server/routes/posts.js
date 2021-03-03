/* Route for post handling 

- '/' --> HEllo world page

- '/post' --> for posting posts

- '/gallery' --> get all posts

- '/gallery/:id' --> getOne post by id

- '/latest' --> get three latest post

- '/random' --> get one random post

*/



const express = require('express')
const router = express.Router()


const path = require('path')
const { uploadData, getAllPosts ,getOnePost,getLatest,getRandom,deleteOnePost} = require('../Controllers/postHandler')

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

//get random post
router.get('/random',getRandom)

//delete one post
router.delete('/gallery/:id',deleteOnePost)


//exports
module.exports = router