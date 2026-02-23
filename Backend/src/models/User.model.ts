import mongoose , {Schema , model , Model} from "mongoose";
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

userSchema.index(
    {email : 1 },
    {unique : true}
)

// Hash Password using bcrypt
userSchema.pre("save" , async function(){
    if(!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password , salt);
})


interface userMethods{
    comparePassword(userPassword: string) : Promise<boolean>;
}

userSchema.methods.comparePassword = async function(userPassword : string){
    return bcrypt.compare(userPassword , this.password);
};

interface userFields {
    userName : string,
    email : string,
    password : string,
    role : "user" | "admin",
    createdAt : Date ,
    updatedAt : Date,
};

type userModelType = mongoose.Model<userFields , {} , userMethods >;

export const userModel = model<userFields , userModelType>("User" , userSchema);

