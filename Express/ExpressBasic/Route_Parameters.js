const express= require('express')
const server=express()
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
server.get('/friends/:friendID',(req,res)=>{
    let ID=Number(req.params.friendID)
    if(friends[ID]){
        res.send(JSON.stringify(friends[ID]))
        console.log(req.params)
    }
    else{
        res.statusCode=404
        res.send()
    }
})
server.listen(3080,()=>{
    console.log("listening")
})