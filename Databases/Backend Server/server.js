const http=require('http')
const mongoose=require('mongoose')
const MongoDB='mongodb+srv://nasa_api:0BuuAmm1Ltp2MUn8@nasacluster.jx2uyz3.mongodb.net/'
async function startDatabase(){
    mongoose.connect(MongoDB)
    mongoose.connection.on("open",()=>{
        console.log("Connection Ready!!")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("Error")
    })
}
startDatabase()
const app= require("./app").app
const server=http.createServer(app)
server.listen(3000,()=>{
    console.log("Server Running")
})
