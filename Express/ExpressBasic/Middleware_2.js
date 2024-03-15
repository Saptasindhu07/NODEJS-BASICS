let friends=[
    {
      id: 0,
      name: 'Nikola Tesla',
    },
    {
      id: 1,
      name: 'Sir Isaac Newton',
    },
    {
      id: 2,
      name: 'Albert Einstein',
    }
  ]
const express= require('express')
const  server= express()
server.use(express.json())
server.post("/friends",(req,res)=>{
    if(req.body.name){
        let temp={
            'name':req.body.name,
            'id':req.body.id
        }
        friends.push(temp)
        res.json(friends)
    }
    else{
        res.statusCode=404
        res.end()
    }
    
})
server.post("/friends/:pos",(req,res)=>{
    if(req.body.name){
        let temp={
            'name':req.body.name,
            'id':req.body.id
        }
        friends[req.params.pos]=temp
        res.json(friends)
    }
})
server.get("/friends/:param",(req,res)=>{
    if(req.params){
        res.json(friends[req.params.param])
    }
})
server.get("/friends",(req,res)=>{
    res.json(friends)
})
server.listen(3000,()=>{
    console.log("Server Running")
})
