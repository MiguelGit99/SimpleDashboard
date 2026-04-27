
const Plan = () => {

    return (
        <div className="flex justify-between items-center text-sm mt-auto px-2 py-4 border-stone-300 border-t">
            <div className="flex flex-col">
                <p className="text-sm">Enterprise</p>
                <p className="text-xs text-tapa">Pay as you go</p>
            </div>
            <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 rounded transition-colors cursor-pointer">Support</button>
        </div>
    )
}

export default Plan;