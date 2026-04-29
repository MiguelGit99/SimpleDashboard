import { format } from "date-fns"
import { Calendar, Menu } from "lucide-react";

const Header = () => {
    const fechaFormateada = format((new Date()), "EEEE, MMM do yyyy");
    

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 p-4 border-b border-stone-200">
                        
            <div className="">
                <h3 className="text-sm font-bold">🚀 Good morning, Tom!</h3>
                <p className="text-xs text-tapa">{fechaFormateada}</p>
            </div>
            
            <button className="flex items-center gap-2 text-sm bg-stone-100 transition-colors
                            hover:bg-fresh-eggplant hover:text-white px-3 py-1.5 rounded-2xl
                            cursor-pointer">
                <Calendar className="size-3.5" />
                Prev 6 Months
            </button>
            
        </div>
    )
}

export default Header;