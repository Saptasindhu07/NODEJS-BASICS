const {parse}=require("csv-parse")
const fs=require("fs")
const result=[]
fs.createReadStream("KEPLER.csv")
    .pipe(parse({
        comment:'#',
        columns:true
    }))
    .on("data",(data)=>{
        result.push(data)
    })
    .on("end",(data)=>{
        console.log(result)
        console.log("done")
    })
    .on("error",(err)=>{
        console.log(err)
    })