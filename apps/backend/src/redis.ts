import { createClient, RedisClientType } from "redis";

export const redisClient:RedisClientType=createClient();
redisClient.on("error",(err)=>{
    console.log("Error "+err);
});
