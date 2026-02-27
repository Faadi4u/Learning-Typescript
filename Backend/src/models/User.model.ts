import mongoose, { Schema, model, Model, Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


interface userFields extends Document {
  userName: string;
  email: string;
  password: string;
  role: "user" | "admin";
  refreshToken: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    refreshToken: {
      type: [String],
      default: [], // Stores multiple refresh token
    },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 }, { unique: true });

// Hash Password using bcrypt
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

interface userMethods {
  comparePassword(userPassword: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
  addRefreshToken(token: string): void;
  removeRefreshToken(token: string): void;
}

userSchema.methods.comparePassword = async function (
  this: userFields,
  userPassword: string,
) {
  return bcrypt.compare(userPassword, this.password);
};

userSchema.methods.generateAccessToken = function (this: userFields) {
    const secret = process.env.JWT_ACCESS_SECRET
  const payload = { id: this._id, email: this.email, role: this.role };
  return jwt.sign(payload, secret as string, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN as "15m",
  });
};

userSchema.methods.generateRefreshToken = function (this: userFields) {
  const secret = process.env.JWT_ACCESS_SECRET
  console.log("SECRET:", process.env.ACCESS_TOKEN_SECRET);
  const payload = { id: this._id, email: this.email };
  return jwt.sign(payload, secret as string, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as "7d", 
  });
};
userSchema.methods.addRefreshToken = function (
  this: userFields,
  token: string,
) {
  this.refreshToken.push(token);
};
userSchema.methods.removeRefreshToken = function (
  this: userFields,
  token: string,
) {
  this.refreshToken.filter((t) => t !== token);
};

type userModelType = mongoose.Model<userFields, {}, userMethods>;

export const userModel = model<userFields, userModelType>("User", userSchema);
