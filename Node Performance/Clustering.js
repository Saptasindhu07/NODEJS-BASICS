const express=require('express')
const cluster=require('cluster')
const server=express()
function delay(time){
    let timeNow=Date.now()
    while(Date.now()-timeNow<time){
        //Eat 5 Star Do Nothing
    }
}
server.get("/",(req,res)=>{
    res.send("You must see this Line immediately or your master server was blocked due to already running code")
})
server.get("/timer",(req,res)=>{
    delay(9000)
    res.send("Function executed")
})
if(cluster.isMaster){
    console.log("Master Started")
    cluster.fork()
    cluster.fork()
}
else{
    console.log("Worker process Started")
    server.listen(3000)
}