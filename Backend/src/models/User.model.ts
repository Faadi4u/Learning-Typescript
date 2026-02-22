import mongoose , {Schema , model , InferSchemaType} from "mongoose";
import bcrypt from "bcrypt"

export const userSchema = new Schema({ 
    userName : {
            type : String,
            required : true,
            trim : true,
            minlength : 3,
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
            required: true,
            select : false
        },
        role : {
            type : String,
            enum : ['user' , 'admin'],
            default : 'user',
        }
},{timestamps:true})

// Hash Password using bcrypt
userSchema.pre("save" , async function(){
    if(!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password , salt);
})


export type User = InferSchemaType<typeof userSchema>;

export const userModel = model<User>("User" , userSchema)

