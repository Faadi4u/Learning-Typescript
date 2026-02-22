import mongoose from "mongoose";
import {DB_NAME} from "../constant.ts"
export const connectDB = async ()=> {
    try {
        const connectioninstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`DB Connected Successfully your DB name is: ${connectioninstance.connection.name}`);
        
    } catch (error) {
        console.log("MongoDB connection Failed");
        
    }
}