const http= require('http')
const port=3000
const friends=[
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
const server= http.createServer((req,res)=>{
    if(req.url.split("/").length==3){
        let store=req.url.split("/")
        let store_num=+store[2]
        console.log(store_num)
        res.end(JSON.stringify(friends[store_num]))
    }
    else if(req.url.split("/").length==2 & req.url.split("/")[1]!==""){
        console.log(req.url.split("/"))
        res.end(JSON.stringify(friends))
        console.log("Returned Full")
    }
    else{
        console.log(req.url.split("/"))
        res.statusCode=404
        res.end()
    }
})
server.listen(port,()=>{
    console.log("server is listening")
})