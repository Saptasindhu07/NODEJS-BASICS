const http= require('https')
const req= http.request('https://www.youtube.com/watch?v=1qcWXa2J1T4',(res)=>{
    res.on("data",(data)=>{
        console.log(data)
    })
})
req.end()