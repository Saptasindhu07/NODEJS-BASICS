let model={}
const mongoose=require('mongoose')
let mongooseModel=require("../Backend Server/Database/Schemas.mongo").Mongoose_Model
const express=require('express')
const IncomingDataRouter=express.Router()
async function addData(){
    let count=1
    while(model[count]){
        await mongooseModel.updateOne({
            name:model[String(count)]["name"],
            class: model[String(count)]["class"],
            subject:model[String(count)]["subject"],
        },
        {
            name:model[String(count)]["name"],
            class: model[String(count)]["class"],
            subject:model[String(count)]["subject"],
        },
        {
            upsert:true,
        }
    )
    count=count+1
    }
}
IncomingDataRouter.post("/",(req,res)=>{
    req.on('data',(data)=>{
        model=JSON.parse(data)
        console.log(model)
    })
    req.on('end',async ()=>{
        addData()
        res.end()
    })
})
module.exports={
    IncomingDataRouter
}

