import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {

    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <main  className="flex flex-col flex-1">
                <Outlet />
            </main>
        
        </div>
    )
}

export default Layout;