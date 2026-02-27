import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import {authRoutes} from "./routes/auth.routes.ts"

export const app = express();

app.use(cors({origin : process.env.ORIGIN_URL }));

app.use(cookieparser());

app.use(express.urlencoded({extended:true , limit : "16kb"}))

app.use(express.json({limit: "16kb"}))

app.use("/api/v1/auth" , authRoutes)

