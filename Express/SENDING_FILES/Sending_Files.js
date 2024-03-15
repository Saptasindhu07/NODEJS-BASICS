const path=require('path')
const express=require('express')
const server=express()
server.get('/images',(req,res)=>{
    res.sendFile(path.join(__dirname,'.','sr.png'))
})
server.get('/pdf',(req,res)=>{
    res.sendFile(path.join(__dirname,'.','major-test-series-advance.pdf'))
})
server.listen(3000)