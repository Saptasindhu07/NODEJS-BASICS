const express=require('express')
const mongoose=require('mongoose')
const mongooseModel=require('../Backend Server/Database/Schemas.mongo').Mongoose_Model
const DeleteRouter=express.Router()
DeleteRouter.delete("/:parameter",async (req,res)=>{
    let name=String(req.params.parameter)
    async function validateData(){
        return await mongooseModel.find({
            name:name
        })
    }
    async function UpdatedData(){
        return await mongooseModel.find({})
    }
    async function ShowUpdatedData(){
        res.status(200).json(await UpdatedData())
    }
    async function deleteData(){
        await mongooseModel.deleteOne({
            name:name
        })
    }
    if(validateData()){
        console.log(validateData())
        deleteData()
        ShowUpdatedData()
    }
    else{
        res.status(200).json("No Such Record Found Please Try Again!!")
    }
})
module.exports={DeleteRouter}