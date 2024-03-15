const  http=require('https')
const req=http.request('https://www.google.com',(res)=>{
    res.on("data",(chunks)=>{
        console.log(chunks)
    });
    res.on("end", ()=>{
        console.log("end")
    })
    
})
req.end()