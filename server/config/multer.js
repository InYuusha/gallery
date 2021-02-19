
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

module.exports =  multer({storage:storage})

