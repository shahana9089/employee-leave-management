import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },

    leaveType:{
        type: String,
        enum:[
            "Casual Leave",
            "Sick Leave"
        ]
    },
    fromDate: Date,
    toDate: Date,
    reason: String,
    status:{
        type: String,
        default: "Pending"
    }
},
{
    timestamps: true
})

const Leave = mongoose.model("Leave",leaveSchema)
export default Leave;
