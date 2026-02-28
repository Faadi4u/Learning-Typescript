import type { Request , Response } from "express";
import { userModel } from "../models/User.model.ts";

// Register User
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

// Login User
export const login = async (req: Request , res: Response) => {
    try {
        const {email , password} = req.body;

        // Basic Validation 
        if(!email || !password){
            res.status(409).json({
                success: false,
                message: "All fields required",
            });
        };

        // Checking user exist or not
        const user = await userModel.findOne({email}).select("+password");

        if(!user){
          return res.status(401).json({
                success : false,
                message : "Invalid credentials"
            })
        }

        // Commpare password 
        const isMatch =await  user.comparePassword(password)
        if(!isMatch){
            return res.status(401).json({
                success : false,
                message : "Invalid credentials",
            });
        }

        // Generaate Tokens
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        // Store refresh token
        user.addRefreshToken(refreshToken);
        await user.save();

        // return response 
        return res.status(200).json({
            success : true,
            message : "Login Successfuly",
            accessToken,
            refreshToken,
            user : {
                email : user.email,
                id : user._id,
                role: user.role,
                userName : user.userName
            },
             
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    };
}