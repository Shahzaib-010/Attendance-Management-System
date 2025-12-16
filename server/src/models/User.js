import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    employeeId: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'user'], required:true},
    dob: {type: Date, required: true},
    salary: {type: Number, required: true},
    department: {type: String, required: true},
    createdAt:{type:Date, default:Date.now},
    department: { type: String, required: true }, },
     { timestamps: true })
    

const User = mongoose.model('User', userSchema);
export default User