import mongoose , {Schema , model , InferSchemaType} from "mongoose";

export const userSchema = new Schema({ 
    userName : {
            type : String,
            required : true,
            trim : true,
            minLength : 3,
            maxlength : 50,
        },
        email : {
            type : String,
            required : true,
            trim : true,
            unique : true,
            lowercase : true,
            index : true,
        },
        password : {
            type : String,
            trim : true,
            required: true,
            select : false
        },
        role : {
            type : String,
            enum : ['user' , 'admin'],
            default : 'user',
        }
},{timestamps:true})

export type User = InferSchemaType<typeof userSchema>;

export const userModel = model<User>("User" , userSchema)
