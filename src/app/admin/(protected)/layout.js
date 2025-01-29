"use client";
import "../../../../public/admin/sass/globals.scss";
import "../../../../public/admin/sass/pages/adminLayout.scss";
import NavTop from "../components/navTop";
import SideBar from "../components/sideBar";
import { useState } from "react";


export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className='layout_main'>
            <div className={`overlay ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}></div>
            <div className={`left_main ${isSidebarOpen ? 'open' : 'closed'}`}>
                <SideBar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
            </div>
            <div className='right_main'>
                <NavTop toggleSidebar={toggleSidebar} />
                {children}
            </div>
        </div>
    );
}