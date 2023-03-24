const mongoose =require("mongoose");
const ObjectId =require('mongoose').ObjectId;

const schema =new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
    startTime:{type:String},
    endTime:{type:String}
},{timestamps:true})
const eventmodel =mongoose.model("events",schema);

module.exports =eventmodel;