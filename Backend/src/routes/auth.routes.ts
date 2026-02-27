import { Router } from "express";
import { register } from "../controllers/auth.controller.ts";


const router = Router();

router.post("/register" , register);

export const authRoutes = router; 
