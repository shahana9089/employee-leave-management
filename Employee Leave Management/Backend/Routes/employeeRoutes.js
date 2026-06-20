import express from "express";

import upload from "../middlewares/upload.js";

import { addEmployee, getEmployee, getEmployees, updateEmployee, deleteEmployee } from "../controllers/Empployeecontroller.js";


const router = express.Router();


router.post("/add", upload.single("image"), addEmployee);

router.get("/getemp", getEmployees);

router.get("/getspeci/:id", getEmployee);

router.put("/update/:id", updateEmployee);

router.delete("/delete/:id", deleteEmployee);


export default router;