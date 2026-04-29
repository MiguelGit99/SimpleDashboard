import { ChartBar } from "lucide-react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from "recharts";
import { PERFORMANCE_DATA } from "../../lib/constants";
import { ResponsiveContainer } from "recharts";


const PerformanceRadar = () => {

    return (
        <div className="col-span-1 lg:col-span-4 border rounded border-stone-300 p-4">
            <h3 className="flex gap-1.5 items-center font-medium mb-4">
                <ChartBar />
                PerformanceRadar
            </h3>    
            <ResponsiveContainer width="100%" height={256}>
                <RadarChart 
                    data={PERFORMANCE_DATA} 
                    width="100%" 
                    height={256} 
                    margin={{right: 20, left:20 }}
                >
                    <PolarGrid stroke="#f5f5f5" />
                    <PolarAngleAxis 
                        dataKey="category"
                        tick={{fontSize: 12, fontWeight: 700}}
                    />
                    <PolarRadiusAxis tick={{fontSize: 12, fontWeight: 700}} angle={30}/>
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#8f0177"
                        fill="#8f0177"
                        fillOpacity={0.2} 
                    />     
                    <Tooltip 
                        wrapperClassName="text-sm rounded"
                        labelClassName="text-xs text-stone-500" />
                    <Legend />        
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceRadar;