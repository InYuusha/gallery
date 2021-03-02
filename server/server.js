const express = require('express')

const postRoutes = require('./routes/posts')
const tagRoutes = require('./routes/tags')
const mongoose = require('mongoose')

const app = express()

//config
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    next()
   

})

app.use('/public', express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//mongodb connection
let url =`mongodb+srv://InYuusha:qwertyasdzx1234@cluster0.jsh9b.mongodb.net/gallery`
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log("Server connected to the database"))


//routes
app.use('',postRoutes)
app.use('',tagRoutes)


//listen
const port = process.env.PORT||5000;

app.listen(port,()=>console.log(`Server is running on ${port}`))