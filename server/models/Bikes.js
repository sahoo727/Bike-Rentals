const mongoose = require('mongoose')


const bikeSchema=new mongoose.Schema({
    bikename:{type:String,required:true},
    bikemodel:{type:String,required:true,unique:true},
    regno:{type:String,required:true,unique:true},
    fuel:{type:Number,required:true},
    bikecolor:{type:String,required:true},  
    Desc:{type:String,required:true}
},{timestamps:true})


module.exports =mongoose.model('bike',bikeSchema)