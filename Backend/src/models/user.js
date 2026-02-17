import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        default: "user"
    }
});

const User = mongoose.model("User", userSchema);

export default User;