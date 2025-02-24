import express from "express";
import router from "./routes";
import { redisClient } from "./redis";
const app = express();

const port=8080;

app.use(express.json());

app.use(router);


async function startServer(){
    try {
        await redisClient.connect();
        console.log("Connected to Redis");
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
        
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();