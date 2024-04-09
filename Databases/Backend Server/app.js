const PORT=3000
const Data_Incoming_Router=require("./Data_Incoming_Router").IncomingDataRouter
const OutgoingRouter=require("./Data_Outgoing_Router").OutgoingRouter
const SearchRouter=require("./Data_Validation_Search").SearchRouter
const DeleteRouter=require("./Data_Incoming_Delete").DeleteRouter
const express=require('express')
const app= express()
const cors=require('cors')
app.use(cors())
app.use(Data_Incoming_Router)
app.use(OutgoingRouter)
app.use(SearchRouter)
app.use(DeleteRouter)
module.exports={
    app
}