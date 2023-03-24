const mongoose = require('mongoose');
async function main(){
    await mongoose.connect("mongodb://localhost/eventscheduler");
    console.log("connection done!");

}
module.exports = main;
