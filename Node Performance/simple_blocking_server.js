const express=require('express')
const server= express()
function delay_(time){
    const timeNow=Date.now()
    while(Date.now() - timeNow < time){
        
    }
}
server.get('/timer',(req,res)=>{
    delay_(9000)
    res.end()
})
server.get('/status',(req,res)=>{
    res.json("This message should be displayed immediately otherwise the server is blocked")
})
server.listen(3000,()=>{
    console.log("Listening")
})