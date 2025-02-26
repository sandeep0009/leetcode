import { createClient, RedisClientType } from "redis";

export const redisClient:RedisClientType=createClient({
    socket:{
        host:"localhost",
        port:6379
    }
});
redisClient.on("error",(err)=>{
    console.log("Error "+err);
});
