const express= require('express')
const port=3000
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
const server=express()
server.get('/',(req,res)=>{
    res.send("HElloooooooo")
})
server.get('/friends',(req,res)=>{
    res.send(JSON.stringify(friends))
})
server.post('/friends',(req,res)=>{
    req.on('data',(data)=>{
        let stringed=data.toString()
        friends.push(JSON.parse(stringed))
        res.json(friends)
    })
})
server.listen(port,()=>{
    console.log("Live server..........")
})