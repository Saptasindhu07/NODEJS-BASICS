const mongoose=require('mongoose')
const schemas= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
})

// IN MONGODB, a set of data is known as a set of collections and a set of collections make up what is called a model
//we can add this schema which is a set of validation steps to any collection in our model 
//By default the name of the collection we pass into the model is pluralised by mongoose and a collection of that name 
//is created with the schemas applied.
const Mongoose_Model=mongoose.model("Launch",schemas)
module.exports={
    Mongoose_Model
}