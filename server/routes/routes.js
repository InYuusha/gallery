const express = require('express')
const router = express.Router()
const events = require('../models/model')
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')


//multer config
const storage = multer.diskStorage({

    destination:'public',
    filename:(req,file,cb)=>{
        crypto.pseudoRandomBytes(16,(err,raw)=>{
            if(err) return cb(err)
            cb(null,raw.toString('hex')+path.extname(file.originalname))
        })
    }
})
let upload = multer({storage:storage})

//routes
router.get('/',(req,res)=>{
    res.send("Hello World")
  
})
router.post('/post',upload.single('image'),(req,res)=>{
    if(!req.file){
        console.log("Select a image")
        res.send({success:false,msg:'Image not selected'})
    }
    else{
        let host = req.get('host')
        let imageUrl = `${req.protocol}://${host}/${req.file.path}`

        let event = new events({
            name:req.body.name,
            description:req.body.description,
            imageUrl:imageUrl
        })
        event.save((err,result)=>{
            if(err)res.send({success:false,msg:err})
            res.send({success:true,msg:result})
        })
    }
})
router.get('/gallery',(req,res)=>{
    events.find({},(err,result)=>{
        if(err) res.send({success:false,msg:err})
        res.json(result)
    })
})


//exports
module.exports = router