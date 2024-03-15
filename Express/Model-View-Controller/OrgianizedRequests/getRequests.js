let friends=require('./data')
function getRequest(req,res){
    if(req.params.parameter){
        let param=req.params.parameter
        res.json(friends.friends[param])
    }
    else{
        res.json(JSON.parse(friends.friends))
    }
}

module.exports={
    getRequest
}