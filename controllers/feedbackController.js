const { timeStamp, error } = require("console")
const feedbackPreference= require("../models/feedbackModel")
const storefeedback= (req,res,next)=>{
    let feed = new feedbackPreference({
        postById:req.body.postById,
        postByName:req.body.postByName,
        message:req.body.message
    })
    feed.save()
    .then(response=>{
        res.json({
            message:'feedback suceesfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An Error occure'
        })
    })
}

const readFeedback = (req,res,next)=>{

    feedbackPreference.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports ={
    readFeedback,storefeedback
}