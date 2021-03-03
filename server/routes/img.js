/*
Route for getting img

- '/img/:id' --> send the img with post id 
     --- desc : used for creating src in frontend

*/


const express = require('express')
const router = express.Router()
const {getImg} = require('../Controllers/imageHandler')

//for image
router.get('/img/:id',getImg)


module.exports = router