const mongoose =require("mongoose")
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    postById:{
        type: String
    },
    postByName:{
        type:String
    },
    Message:{
        type: String
    }    
},{timestamps:true}) 

const feedback = mongoose.model('feedback',feedbackSchema)
module.exports  = feedback