import {client} from "@repo/db/client";
import { Request,Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp=async(req:Request,res:Response):Promise<any>=>{
    const {name,email,password}=req.body;
    const userExist=await client.user.findUnique({
        where:{
            email
        }
    });
    if(userExist){
        return res.status(400).json({
            message:"User already exists"
        });
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await client.user.create({
        data:{
            email,
            password:hashedPassword,
            name
        }
    });
    const token=jwt.sign({id:user.id},process.env.JWT_SECRET as string);
    return res.status(201).json({
        token
    });
}


export const signIn=async(req:Request,res:Response):Promise<any>=>{
    const {email,password}=req.body;
    const user=await client.user.findUnique({
        where:{
            email
        }
    });
    if(!user){
        return res.status(400).json({
            message:"User does not exist"
        });
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid password"
        });
    }
    const token=jwt.sign({id:user.id},process.env.JWT_SECRET as string);
    return res.status(200).json({
        token
    });
}