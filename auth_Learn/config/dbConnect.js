const mongoose = require("mongoose");


const dbConnect = async (URI)=>{
   try {
    // const URI = "mongodb://localhost:27017";
    if(!URI){
        throw new Error("MONGO_URI is not defined")
    }
    await mongoose.connect(URI);
    console.log("Database connection established successfully!")
   } catch (error) {
    console.error('Database connection failed ', error);
   }
}


module.exports = dbConnect;