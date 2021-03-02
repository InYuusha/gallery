const events = require('../models/model')


exports.getImg= async function(req,res){
    await events.findOne({_id:req.params.id})
    .then((data)=>{
        let imgData =data.imageUrl
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(imgData.data,'Base64');
    
    })
    .catch(err=>res.send({success:false,msg:err}))

}