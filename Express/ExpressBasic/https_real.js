const axios= require('axios')
axios.get("https://www.npmjs.com/package/axios#axios-api")
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log("error")
    })
    .then(()=>{
        console.log("Program End THIS IS LIVE SERVER")
    })