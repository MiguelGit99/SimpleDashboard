import { Blocks, ChartNoAxesCombined, Home, Search, User, PanelLeftClose, PanelLeftOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { PROFILE_IMAGE } from "../../lib/constants";
import Plan from "./Plan";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx"

const sidebarItems = [
    { label:"Analytics", icon: ChartNoAxesCombined, path: "/analytics"},
    { label:"Customers", icon: User, path: "/customer"},
    { label:"Integration", icon: Blocks, path: "/Integration"},
]

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const Icon = collapsed ? ChevronRight : ChevronLeft;

    return (
        
        <div
            className={clsx(
                "h-screen flex flex-col border-r border-stone-200 transition-[width] duration-300 ease-in-out",
                collapsed ? "w-16 px-2" : "w-55 px-4"
                )}    
                >
        
            {/* <div className="w-55 pl-4 pt-4 flex flex-col h-screen"> */}

            {/* 🔘 Toggle */}
            <div className={clsx("flex absolute", collapsed ? "ml-7": "ml-40")}>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="mb-1 mt-1 ml-auto relative p-2 rounded-lg transition-all duration-300
                            hover:shadow active:scale-95 "
                >    
                        <ChevronLeft size={13} 
                              className={clsx("transition-transform duration-300 hover:scale-150", collapsed && "rotate-180")} /> 
                </button>
                
            </div>

            {/* 👤 Perfil */}
            <div className="flex gap-2 border-b mb-4 mt-2 pb-4 border-stone-300">
                <img src={PROFILE_IMAGE} className="size-8 rouded bg-fresh-eggplant shadow"/>
                
                


                {!collapsed && (
                    <div className="flex flex-col">
                        <h3 className="text-sm font-bold">Dashboard</h3>
                        <p className="text-xs text-tapa">mail@test.com</p>
                    </div>
                )}
                
            </div>

            {/* 🔍 Search */}
            {!collapsed && (
            <div className="bg-mercury relative rounded px-2 py-1 text-sm">
                <Search className="size-3.5 absolute top-1/2 -translate-y-1/2"></Search>
                <input className="outline-none pl-5 placeholder:text-stone-400" placeholder="Search"></input>
            </div>
            )}

            {/* 📌 Nav */}
            <div className="flex flex-col gap-1.5 mt-4">
                
                <NavLink
                    to="/"
                    end
                    className="flex gap-2 items-center cursor-pointer rounded
                            px-2 py-1.5 text-sm bg-white shadow text-stone-950" >
                    <Home className={clsx(collapsed ? "size-5": "size-3.5", "text-fresh-eggplant")}/>
                    {!collapsed && <span>Dashboard</span>}
                </NavLink>
                    
                {/* <button key={index} className="flex gap-2 items-center cursor-pointer rounded
                                    px-2 py-1.5 text-sm text-tapa
                                    hover:bg-mercury transition-all duraction-200">
                        <item.icon className="size-3.5"/>
                        {item.label}
                    </button>    */}


                { sidebarItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"} // importante para dashboard
                        className="flex gap-2 items-center cursor-pointer rounded
                                    px-2 py-1.5 text-sm text-tapa
                                    hover:bg-mercury transition-all duraction-200"
                        // className={({ isActive }) =>
                        // `flex gap-2 items-center rounded px-2 py-1.5 text-sm transition-all ${
                        //     isActive
                        //     ? "bg-white shadow text-stone-950"
                        //     : "text-tapa hover:bg-mercury"
                        // }`
                        // }
                    >
                        <item.icon className={clsx(collapsed ? "size-5": "size-3.5", "shrink-0")} />
                        <span
                            className={clsx(
                                "transition-all duration-200",
                                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                            )}>
                            {item.label}
                        </span>
                    </NavLink>
                ))}
            </div>
            
            {/* 📦 Footer */}
            {/* Parte inferior */}
            <div className="mt-auto">
                {!collapsed && <Plan />}
            </div>

            {/* </div> */}

        </div>
    )
}

export default Sidebar;