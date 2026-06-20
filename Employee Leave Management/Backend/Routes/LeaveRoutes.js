import express from "express";

import { applyLeave, getAllLeaves, getEmployeeLeaves, updateLeaveStatus} from "../controllers/Leavecontroller.js";





const router = express.Router();

router.post("/add", applyLeave);

router.get("/all", getAllLeaves);

router.get("/employee/:id", getEmployeeLeaves);

router.put("/status/:id", updateLeaveStatus);

export default router;