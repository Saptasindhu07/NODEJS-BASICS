let request_=require("./request")
let response_=require("./response")
let t=0
setTimeout(()=>{
    request_.sendRequest("www.google.com")
},1000)
setTimeout(()=>{
    let t= Math.floor(Math.random()*2000)+2000
    response_.sendResponse(t)
},t)