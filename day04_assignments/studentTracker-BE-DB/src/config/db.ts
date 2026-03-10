import mongoose from "mongoose";

const connectDB = async () => {
    try{
        if(!process.env.MONGO_URI){
            throw new Error("MONGO_URI is not defined");
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

    }catch(err){
        console.log("DB connection error:", err);
        process.exit(1);
    }
}

export default connectDB;