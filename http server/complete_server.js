const http= require('http')
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
const server=http.createServer((req,res)=>{
    if(req.method=="GET" & req.url.split("/").length==3){
        let num=+req.url.split("/")[2]
        if(num+1>friends.length){
            res.statusCode=404
            res.end()
        }
        else{
            res.statusCode=200
            res.setHeader("Content-Type","application/json")
            res.end(JSON.stringify(friends[num]))
        }
    }
    else if(req.method=="GET" & req.url.split("/").length==2 & req.url.split("/")[1]!==""){
        res.statusCode=200
        res.setHeader("Content-Type","application/json")
        res.end(JSON.stringify(friends))
    }
    else if(req.method=="POST"){
        req.on('data',(data)=>{
            let stringdata=data.toString()
            friends.push(JSON.parse(stringdata))
        })
        console.log("Changed Data is:")
        setTimeout(()=>{
        console.log(friends)
        },2000)
    }
})
server.listen(port,()=>{
    console.log("Server is Listening....")
})