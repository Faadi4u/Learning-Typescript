import dotenv from "dotenv";
import {app} from "./app.ts"
import {connectDB} from "./DB/db.ts"

dotenv.config({path: "./.env"})

const port = process.env.PORT || 7000

connectDB()
.then(()=>{
    app.listen(port , ()=> {
    console.log(`Your server is running on ${port}`);
    })
})
.catch((err)=> console.log("Mongo DB fails to connect in Server"))

