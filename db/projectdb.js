 var mongoose = require("mongoose");
 require('dotenv').config();

 var url = process.env.MONGO_URI;
 var conn = mongoose.connect("mongodb+srv://sami:sami1999@cluster0.chic2xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 " , { useNewUrlParser: true  , useUnifiedTopology: true} , (err)=>{
     if(!err){
         console.log("Moongoose connect succeded...");
     }
     else{
         console.log("ERROR : " , err);
     }
 });

 require("./schema");
    
 
 //mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/db",{useMongoClient: true});
 
 
 

