import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();

connectDB();

const PORT = 3000;

// parse json in request body
app.use(express.json());

// every routes defined here inside this route
app.use("/api", router);

// usually a last middleware which throw error until and unless another middleware isn't defined so we usually don't call next() inside errorhandler
app.use(errorHandler);


app.listen(PORT, ()=> {
    console.log(`APP is running on PORT ${PORT}`)
})