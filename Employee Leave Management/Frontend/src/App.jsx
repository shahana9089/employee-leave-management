import React from "react";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import { Route, Routes } from "react-router-dom";
import Employees from "./Pages/Admin/Employees";
import EmployeeLayout from "./Pages/Employee/EmployeeLayout";
import EmployeeDashboard from "./Pages/Employee/EmployeeDashboard";
import MyLeaves from "./Pages/Employee/MyLeaves";
import ApplyLeave from "./Pages/Employee/ApplyLeave";
import EditEmployee from "./Pages/Admin/EditEmployee";
import LeaveRequests from "./Pages/Admin/LeaveRequests";
import AddEmployee from "./Pages/Admin/AddEmployee";
import Login from "./Pages/Employee/Auth/Login";


const App = () => {
  return (
    <>
      {/* <Toaster/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admin-employee" element={<Employees />} />
          <Route path="edit-employee/:id" element={<EditEmployee />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="leave-requests" element={<LeaveRequests />} />
        </Route>
        
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="my-leave" element={<MyLeaves />} />
          <Route path="apply-leave" element={<ApplyLeave />} />
        </Route>
       
      </Routes>
    </>
  );
};

export default App;