const mongoose=require('mongoose')
const express=require('express')
const mongooseModel=require('../Backend Server/Database/Schemas.mongo').Mongoose_Model
const SearchRouter=express.Router()
SearchRouter.get("/:param",(req,res)=>{
    let name=String(req.params.param)
    async function validate(){
        return await mongooseModel.find({
            name:name
        })
    }
    async function postData(){
        return await mongooseModel.find({
            name:name
        })
    }
    async function sendResponse(){
        res.status(200).json( await postData())
    }
    if(validate()){
        sendResponse()
    }
    else{
        res.status(200).send("NO DATA RECORD FOUND")
    }
})
module.exports={
    SearchRouter
}