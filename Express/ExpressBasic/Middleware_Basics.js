const express=require('express')
const server=express()
server.use((req,res,next)=>{
    console.log("MiddleWare Alive")
    next()
})
server.get("/friends",(req,res)=>{
    res.statusCode=200
    res.send("FRIENDS")
})
server.listen(3000,()=>{
    console.log("Server Live on port 3080")
})