import mongoose from "mongoose";  
import dotenv from "dotenv";
import  Colors  from "colors";

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://goutham:gouthu0231@ecomweb.r9wysi7.mongodb.net/ecommerce");
        console.log(`Connected to MONGODb Database${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(`Error in mongoose${error}`.bgRed.white);
        
    }
};

export default connectDB;