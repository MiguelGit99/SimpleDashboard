import { DollarSignIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { REVENUE_DATA } from "../../lib/constants";

const RevenueGraph = () => {

    return (
        <div className="col-span-8 border rounded border-stone-300 p-4">
            <h3 className="flex gap-1.5 items-center font-medium mb-4">
                <DollarSignIcon />
                Revenue
            </h3>
            <LineChart 
                width="100%" 
                height={256} 
                data={REVENUE_DATA}
                margin={{
                    top: 0,
                    right: 10,
                    left: -24,
                    bottom: 0,
                }} >
                    <XAxis 
                        dataKey="month" 
                        tick={{fontSize: 12, fontWeight: 700}}
                        axisLine={false}
                        tickLine={false} />
                    <YAxis tickFormatter={(value) => `${value / 1000}K`} 
                        tick={{fontSize: 12, fontWeight: 700}}
                        axisLine={false}
                        tickLine={false}
                        className="text-sm font-bold" />
                    <Tooltip 
                        wrapperClassName="text-sm rounded"
                        labelClassName="text-xs text-stone-500" />
                        <CartesianGrid stroke="#f5f5f5" />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8f0177"
                        fill="#8f0177" />
                    <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="#78716c"
                        fill="#000000" />
                </LineChart>
        </div>
    )
}

export default RevenueGraph;