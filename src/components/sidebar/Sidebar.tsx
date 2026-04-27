import { Blocks, ChartNoAxesCombined, Home, Search, User } from "lucide-react";
import { PROFILE_IMAGE } from "../../lib/constants";
import Plan from "./Plan";
import { NavLink } from "react-router-dom";

const sidebarItems = [
    { label:"Analytics", icon: ChartNoAxesCombined, path: "/analytics"},
    { label:"Customers", icon: User, path: "/customer"},
    { label:"Integration", icon: Blocks, path: "/Integration"},
]

const Sidebar = () => {

    return (
        <div className="w-55 pl-4 pt-4 flex flex-col h-screen">
            <div className="flex gap-2 border-b mb-4 mt-2 pb-4 border-stone-300">
                <img src={PROFILE_IMAGE} className="size-8 rouded bg-fresh-eggplant shadow"/>
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold">Dashboard</h3>
                    <p className="text-xs text-tapa">mail@test.com</p>
                </div>
            </div>
            <div className="bg-mercury relative rounded px-2 py-1 text-sm">
                <Search className="size-3.5 absolute top-1/2 -translate-y-1/2"></Search>
                <input className="outline-none pl-5 placeholder:text-stone-400" placeholder="Search"></input>
            </div>

            <div className="flex flex-col gap-1.5 mt-4">
                {/* <button className="flex gap-2 items-center cursor-pointer rounded
                                    px-2 py-1.5 text-sm bg-white shadow text-stone-950">
                    <Home className="size-3.5 text-fresh-eggplant"/>
                    Dashboard
                </button> */}


                 <NavLink
                    to="/"
                    end
                    className="flex gap-2 items-center cursor-pointer rounded
                               px-2 py-1.5 text-sm bg-white shadow text-stone-950" >
                    <Home className="size-3.5 text-fresh-eggplant"/>
                    Dashboard
                </NavLink>
                    
                { sidebarItems.map((item) => (
                    <>
                        {/* <button key={index} className="flex gap-2 items-center cursor-pointer rounded
                                        px-2 py-1.5 text-sm text-tapa
                                        hover:bg-mercury transition-all duraction-200">
                            <item.icon className="size-3.5"/>
                            {item.label}
                        </button>    */}

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
                            <item.icon className="size-3.5" />
                            {item.label}
                        </NavLink>
                    </>
                ))}
            </div>
            
            {/* Parte inferior */}
            <div className="mt-auto">
                <Plan />
            </div>

        </div>
    )
}

export default Sidebar;