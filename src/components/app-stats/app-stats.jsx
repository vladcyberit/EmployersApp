import StatsWidget from "../stats-widget/stats-widget";
import "./app-stats.css";

const AppStats = () => {
    return ( 
        <div className="app-stats-wrapper">
            <h1 className="stats-title">Manage Employees</h1>
            <div className="stats-container">
                <StatsWidget icon={"public/totalEmp.svg"} title={"Total employees"} value={385}/>
                <StatsWidget icon={"public/rewardedEmp.svg"} title={"Rewarded employees"} value={287}/>
            </div>
        </div>
    );
}
 
export default AppStats;