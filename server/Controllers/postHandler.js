
const events = require('../models/model')
const fs = require('fs')
const path = require('path')


// upload post
exports.uploadData = async function(req,res){
    
        if(!req.file){
            console.log("Select a image")
            res.send({success:false,msg:'Image not selected'})
        }
        else{
          
             //new event
            let event = new events({
                name:req.body.name,
                description:req.body.description,
                imageUrl:{
                    data:fs.readFileSync(path.join(req.file.path)),
                    contentType:'image/png'
                },
                keywords:req.body.keywords,
                timestamp:new Date().toDateString()
            })
            await event.save((err,result)=>{
                if(err)res.send({success:false,msg:err})
                res.redirect('htts://gallery975.netlify.app')
              
                
            })
        }
}

//get all post
exports.getAllPosts = async function(res,res){

   
    await events.find({},(err,result)=>{
        if(err) res.send({success:false,msg:err})
        res.json(result)
    })

}

//get one post
exports.getOnePost = async function(req,res){
   
        await events.findOne({_id:req.params.id},(err,result)=>{
            if(err) res.send({success:false,msg:err})
            res.json(result)
        })
}

// latest three post
exports.getLatest = async function(req,res){
    
    try{
        await events.find().sort({_id:-1}).limit(3)
        .then(data=>{
            res.json(data)
        })
    }
    catch(err){
        res.send({success:false,msg:err})
    }
         
}

//one random post
exports.getRandom = async function(req,res){
    
    try{
        events.aggregate([{$sample:{size:1}}])
        .then(data=>{
            
            res.send(data)
        })
    }
    catch(err){
        console.log(err)
    }
}