const express = require("express");
const connection= require("./connection");
connection();
const app = express();

const router =require('./routes');
app.use("/v1/",router);


app.listen(4000,()=>{
    console.log("connected to server")
})