import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import Header from "./Dashboard/Header";

const Layout = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            <main className="flex-1 overflow-y-auto bg-gray-50">
                <Outlet />
            </main>
        </div>

    )
}

export default Layout;