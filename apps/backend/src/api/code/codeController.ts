
import {Request,Response} from 'express';
import { redisClient } from '../../redis';
import { client }  from '@repo/db/client';


export const allCodes=async(req:Request,res:Response):Promise<any>=>{
    const codes=await client.problem.findMany();
    return res.status(200).json({
        codes
    });
}

export const codeById=async(req:Request,res:Response):Promise<any>=>{
    const {id}=req.params;
    const code=await client.code.findUnique({
        where:{
            id:id
        }
    });
    if(!code){
        return res.status(404).json({
            message:"Code not found"
        });
    }
    return res.status(200).json({
        code
    });
}


export const codeSubmit=async(req:Request,res:Response):Promise<any>=>{

    const{code,problemId,langauge}=req.body;
    try {
        await redisClient.lPush("codeQueue",JSON.stringify({
            code,
            problemId,
            langauge
        }));
        return res.status(201).json({
            message:"Code submitted"
        });
        
    } catch (error) {
        return res.status(500).json({
            message:"Failed to store code"
        });
        
    }
}


export const checkCode=async(req:Request,res:Response):Promise<any>=>{
    const problemId=req.params.id;

    try {

        const output=await redisClient.brPop("outputQueue",0);
        if(!output) return res.status(404).send("Output not found.");
        const data=JSON.parse(output.element);
        if (data.problemId !== problemId) return res.status(404).send("Output not found.");
        return res.status(200).json({
            status: data.output.status,
            message: data.output.message,
          });
        
    } catch (error) {
        return res.status(500).json({
            message:"Failed to check code"
        });
        
    }

}