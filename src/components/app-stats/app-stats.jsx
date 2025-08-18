import StatsWidget from "../stats-widget/stats-widget";
import "./app-stats.css";

const AppStats = ({ totalValue, rewardedValue }) => {
    return ( 
        <div className="app-stats-wrapper">
            <h1 className="stats-title">Manage Employees</h1>
            <div className="stats-container">
                <StatsWidget icon={"/totalEmp.svg"} title={"Total employees"} value={totalValue}/>
                <StatsWidget icon={"/rewardedEmp.svg"} title={"Rewarded employees"} value={rewardedValue}/>
            </div>
        </div>
    );
}
 
export default AppStats;