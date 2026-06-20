import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    department: {
        type: String,

        enum: [
            "HR",
            "Marketing",
            "Sales",
            "IT",
            "Design"
        ],

        required: true
    },

    joinDate: {
        type: Date,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    image: {
        type: String
    },

    role: {
        type: String,
        default: "employee"
    }

},

{
    timestamps: true
})

const Employee = mongoose.model(
    "Employee",
    employeeSchema
)

export default Employee