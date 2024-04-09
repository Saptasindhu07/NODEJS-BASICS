const cluster=require('cluster')
const express=require('express')
const server=express()
const os=require('os')
const { setTimeout } = require('timers/promises')
if(cluster.isMaster){
    let cpu_count=os.cpus().length
    for(i=0;i<cpu_count;i++){
        cluster.fork()
    }
    cluster.on('exit',(worker)=>{
        console.log(`${process.pid} exited`)
        cluster.fork()
    })
}
else{
    server.listen(3000,()=>{
        console.log(`${process.pid}`)
    })
}
server.get("/timer",(req,res)=>{
    setTimeout(()=>{
        res.send(`Process Id ${process.pid}`)
    },9000)
})
server.get('/normal',(req,res)=>{
    res.send(`Process Id ${process.pid}`)
})

