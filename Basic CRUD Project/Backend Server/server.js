const PORT = 8000
const cors=require('cors')
let database
const express=require('express')
const server = express()
server.use(cors())
server.post("/",(req,res)=>{
    req.on('data',(data)=>{
        let stringed=data.toString()
        database=stringed
        console.log(database)
    })
    res.setHeader('Content-Type','application/json')
    setTimeout(()=>{
        res.end(database)
    },1000)
})
server.listen(8000,()=>{
    console.log(PORT)
})
