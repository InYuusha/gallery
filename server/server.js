const express = require('express')
//routes by category
const postRoutes = require('./routes/posts')
const tagRoutes = require('./routes/tags')
const imgRoutes = require('./routes/img')

//mongo
const mongoose = require('mongoose')
const mongoConfig = require('./config/mongodb')

//app
const app = express()

//cors headers
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    next()
   

})
//
app.use('/public', express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//mongodb connection

mongoose.connect(mongoConfig.url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log("Server connected to the database"))


//routes
app.use('',postRoutes)   //post route
app.use('',tagRoutes)    //rag route
app.use('',imgRoutes)    //img route


//listen
const port = process.env.PORT||5000;

app.listen(port,()=>console.log(`Server is running on ${port}`))