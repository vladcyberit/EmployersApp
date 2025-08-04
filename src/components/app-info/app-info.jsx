import "./app-info.css";
import { FcBusinessman } from "react-icons/fc";


const AppInfo = () => {
    return ( 
        <div className="app-info">
            <div className="container-title">
                <FcBusinessman />
                <h1 className="app-info-title">Employees Dashboard</h1>
            </div>
            <h2 className="app-info-sub">Total number of employees: <span className="app-info-display">10</span></h2>
            <h2 className="app-info-sub">The prize will be awarded to: <span className="app-info-display">2</span></h2>
        </div>
    );
}
 
export default AppInfo;