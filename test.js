const http=require('http')
const server=http.createServer()
let a={
    "1":{
        "name":"SSP",
        class:"SP",
        Sec:"B"
    }
}
console.log(a["1"]["name"])
server.listen(8000)