const express = require("express")
const mongoose = require("mongoose")
const morgan =require("morgan")
const bodyParser =require("body-parser")
const dotenv = require("dotenv")

const langRoute =require('./routes/feedbackRoute')
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Databse connection')
})
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running port `)
})

app.use('/',langRoute)