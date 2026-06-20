import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";


import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardList,
  ShieldCheck
} from "lucide-react";

const AdminSidebar = () => {

  const navigate = useNavigate()

  const menuItems = [

  {
    name: "Dashboard",
    path: "/admin",
    icon: <LayoutDashboard size={20} />
  },

  {
    name: "Employees",
    path: "/admin/admin-employee",
    icon: <Users size={20} />
  },

  {
    name: "Add Employee",
    path: "/admin/add-employee",
    icon: <UserPlus size={20} />
  },

  {
    name: "Leave Requests",
    path: "/admin/leave-requests",
    icon: <ClipboardList size={20} />
  },

];

  const handleLogout = () => {

    // Remove logged in user

    localStorage.removeItem("user")

    // Redirect to login page

    navigate("/")
  }
  

  return (
    <div className="fixed left-0 top-0 h-screen w-68 bg-[#0f172a] text-white flex flex-col border-r border-slate-800">
      {/* Admin Branding */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-purple-500" size={24} />
          <h1 className="text-xl font-bold tracking-tight">Admin Portal</h1>
        </div>
        <p className="text-[10px] text-purple-400 font-semibold mt-1 uppercase tracking-widest">Control Center</p>
      </div>

      {/* Admin Profile Card */}
      <div className="mx-4 mb-8 p-4 bg-[#1e293b] rounded-xl flex items-center gap-3 border border-slate-700">
        <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center font-bold shadow-lg shadow-purple-900/20">
          A
        </div>
        <div>
          <h2 className="text-sm font-semibold">Admin User</h2>
          <p className="text-[10px] text-purple-300 uppercase tracking-wider">Super Admin</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        <p className="text-[10px] font-bold text-slate-500 uppercase px-2 mb-4 tracking-widest">
          Management
        </p>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/20' 
                : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Exit Admin</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;