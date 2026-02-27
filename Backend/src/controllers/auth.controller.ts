import type { Request , Response } from "express";
import { userModel } from "../models/User.model.ts";

export const register = async (req: Request , res: Response) => {
    try {
        const {userName , email , password} = req.body;
        
        // Basic Validation
        if(!userName || !email || !password){
            return res.status(400).json({
                success : false,
                message: "All fields are required" 
            });
        }
        

        // Check user already exist 
        const userAlreadyExist = await userModel.findOne({email});
        if(userAlreadyExist){
            return res.status(409).json({
                success : false,
                message : "User already Exist",
            });
        }

        const user = await userModel.create({
            userName,
            email,
            password,
        });

        // Generate Tokens
        const accessToken =  user.generateAccessToken();
        const refreshToken =  user.generateRefreshToken();

        // store refresh token 
        user.addRefreshToken(refreshToken);
        await user.save();
("Returning success response");
        // Return Response
        return res.status(201).json({
            success : true,
            message : "User registered successfully",
            accessToken,
            refreshToken,
            user : {
                id : user._id,
                userName : user.userName,
                email  : user.email,
                role : user.role
            }
        });


    } catch (error) {
        return res.status(500).json({
            message : "Server Error",
            success : false,
            error
        })
    }
}   