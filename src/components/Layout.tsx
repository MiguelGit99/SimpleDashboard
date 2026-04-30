import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
    
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