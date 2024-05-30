 var mongoose = require("mongoose");
 require('dotenv').config();

 var url = process.env.MONGODB_URI;
 var conn = mongoose.connect( url , { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });

 require("./schema");
    
 
 //mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/db",{useMongoClient: true});
 
 
 

