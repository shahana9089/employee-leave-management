import Employee from "../models/Employee.js"
import bcrypt from "bcrypt"




 
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminExists = await Employee.findOne({ email });

    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Employee.create({
      name: "Admin",
      email,
      password: hashedPassword,
      phone: "9999999999",
      department: "IT",
      joinDate: new Date(),
      salary: 50000,
      role: "admin",
    });

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await Employee.findOne({ email })

    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      })
    }

      // compare entered password with hashed password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {

      return res.json({
        success: false,
        message: "Wrong password"
      })
    }

    res.json({
      success: true,
      user
    })

  } catch (error) {
    console.log(error)

    res.json({
      success: false,
      message: "Something went wrong"
    })
  }
}