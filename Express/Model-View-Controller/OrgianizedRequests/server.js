const express=require('express')
const server=express()
const port=3000
const post=require("./postRequests")
const get=require("./getRequests")
server.get('/friends/:parameter',get.getRequest)
server.post('/friends/:parameter',post.postRequest)

server.listen(3000,()=>{
    console.log("Server is Live...")
})