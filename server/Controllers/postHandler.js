
const events = require('../models/model')



exports.uploadData = async function(req,res){
    
        if(!req.file){
            console.log("Select a image")
            res.send({success:false,msg:'Image not selected'})
        }
        else{
            let host = req.get('host')
            let imageUrl = `${req.protocol}://${host}/${req.file.path}`
            
             //new event
            let event = new events({
                name:req.body.name,
                description:req.body.description,
                imageUrl:imageUrl,
                keywords:req.body.keywords,
                timestamp:new Date().toDateString()
            })
            await event.save((err,result)=>{
                if(err)res.send({success:false,msg:err})
                
              
            })
        }
   
}
exports.getAllPosts = async function(res,res){

   
    await events.find({},(err,result)=>{
        if(err) res.send({success:false,msg:err})
        res.json(result)
    })

}

exports.getOnePost = async function(req,res){
   
        await events.findOne({_id:req.params.id},(err,result)=>{
            if(err) res.send({success:false,msg:err})
            res.json(result)
        })
    
}
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