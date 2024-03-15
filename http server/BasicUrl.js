const http= require('http')
const port=3000
const server=http.createServer((req,res)=>{
    if(req.url==="/friends"){
        console.log("checking which URL was visited......")
        setTimeout(()=>{
            console.log("Friend URL was visited")
        },10000)
        res.writeHead(200,{
            'Content_Type':'application/json'
        })
        const response_data=JSON.stringify({
            'name':'Sapta Sindhu Palit',
            'class':12,
            'status':'Loser'
        })
        res.end(response_data)
        }
    else if(req.url==="/enemy"){
        console.log("checking which URL was visited......")
        setTimeout(()=>{
            console.log("Enemy URL was visited")
        },10000)
        res.statusCode=200
        res.setHeader("Content_Type","text/html")
        res.write("<html>")
        res.write("<body>")
        res.write("<p>Heello There how are u I am Sagu De Your enemy!!!</p>")
        res.write("</body>")
        res.write("</html>")
        res.end()
    }
    else{
        console.log("404 Error Crash")
        res.statusCode=404
        res.end()
    }
})
server.listen(port,()=>{
    console.log("Server is Live")
})