// User mongoose model with email password
import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true })

// export this user schema
const UserSchema= mongoose.model("User", useSchema)
export default UserSchema;
