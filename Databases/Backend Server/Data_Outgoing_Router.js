const express=require('express')
const mongooseModel=require('./Database/Schemas.mongo').Mongoose_Model
const OutgoingRouter=express.Router()
async function findData(){
    return await mongooseModel.find({})
}
OutgoingRouter.get("/",async (req,res)=>{
    res.status(200).json(await findData())
})
module.exports={
    OutgoingRouter
}