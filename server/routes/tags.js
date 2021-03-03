/*
Route for handling tags

- '/tags' --> get all tags

- '/tags/:tag' --> get all post with that  tag

*/



const express = require('express')
const router = express()
const {getAllTags, getPostWithTag} = require('../Controllers/tagHandler')
//routes

//get all tags
router.get('/tags',getAllTags)

// get posts with specific tag
router.get('/tags/:tag',getPostWithTag)

//exports
module.exports = router;