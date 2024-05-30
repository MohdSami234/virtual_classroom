var mongoose = require("mongoose");
require('dotenv').config();

let url = process.env.MONGODB_URI 

var conn = mongoose.connect(url, { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });

 
 


 require("../models/User");