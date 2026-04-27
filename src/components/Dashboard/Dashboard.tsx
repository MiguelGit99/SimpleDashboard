import PerformanceRadar from "./PerformanceRadar";
import RevenueGraph from "./RevenueGraph";
import StatsCard from "./StatsCard";
import TransactionList from "./TransactionList";

const Dashboard = () => {

    return (
        <div className="bg-white rounded-lg m-0 shadow w-full overflow-y-auto">
            
            <div className="grid grid-cols-12 gap-3 px-4 pb-4 ">
                <StatsCard />
                <RevenueGraph />
                <PerformanceRadar />
                <TransactionList />    
            </div>
        </div>
    )
}

export default Dashboard;