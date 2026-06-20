import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";

export const addEmployee = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const employee = await Employee.create({
            ...req.body,
            password: hashedPassword,
            image: req.file
                ? req.file.filename
                : ""

        })

        res.json({
            success: true,
            employee
        })
    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: "Somthing went wrong"
        })
    }
}

export const getEmployees = async (req, res) => {

    try {
        const employees = await Employee.find({
            role: "employee"
        })

        res.json(employees)


    } catch (error) {
        console.log(error)
    }
}


export const getEmployee = async (req, res) => {
    try {

        const employee = await Employee.findById(req.params.id)

        res.json(employee)

    } catch (error) {
        console.log(error)
    }

}
 
export const updateEmployee = async (req, res) => {

    try {
        const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
    )

    res.json(employee)
} catch  (error) {
    console.log(error)
    }
}

export const deleteEmployee = async (req, res) => {

    try {
       const employee = await Employee.findByIdAndDelete(req.params.id)

        res.json({
            success: true,
            message: "Employee deleted"
        })
    } catch (error) {
        console.log(error)
    }
}