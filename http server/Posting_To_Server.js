const http=require('http')
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
const server =http.createServer((req,res)=>{
    if (req.method=="POST"){
        console.log("Started Posting the data ")
        req.on("data",(data)=>{
            let readable= data.toString()
            let addition=JSON.parse(readable)
            friends.push(addition)
        })
        setTimeout(()=>{
        console.log(friends)
        },3000)
    }
    else if(req.method=="GET"){
        res.statusCode=200
        res.setHeader("Content_Type","application/json")
        res.end(JSON.stringify(friends))
    }
})
server.listen(port,()=>{
    console.log("Server Live")
})