const events = require('../models/model')

exports.getAllTags =  async function (req,res){
    let tags=[]
  await events.find()
  .then(data=>{
      
      data.forEach(post=>{
          post.keywords.forEach(tag=>{
              
              tags.push(tag)
          })
      })
      
      tags = new Set(tags)
      tags = Array.from(tags)
      
      res.send(tags)
  })
  
    
 


}

exports.getPostWithTag = async function(req,res){

await events.find({keywords: req.params.tag})
.then((data)=>{
    
    res.json(data);
    
})
.catch(err=>res.send({err}))
}