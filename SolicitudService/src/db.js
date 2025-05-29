import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://matiaz490:1234@terranovaconect.m881eys.mongodb.net/PRUEBA?retryWrites=true&w=majority&appName=terranovaConect", {
          
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
