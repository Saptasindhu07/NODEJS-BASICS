let friends=require("./data")
function postRequest(req,res){
    res.setHeader('Content-Type','application/json')
    console.log(req.params.parameter)
    if(friends.friends[req.params.parameter]){
        let param=req.params.parameter
        req.on('data',(data)=>{
            let body=data.toString()
            friends.friends[param]=JSON.parse(body)
        })
        setInterval(()=>{
            res.end(JSON.stringify(friends.friends))
        },100)
    }
    else{
        req.on('data',(data)=>{
            let body=data.toString()
            friends.friends.push(JSON.parse(body))
        })
        
        res.json(friends.friends)
    }
}

module.exports={
    postRequest
}