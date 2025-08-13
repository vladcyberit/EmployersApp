import "./stats-widget.css";

const StatsWidget = ({ icon, title, value }) => {
    return ( 
        <div className="stats-widget-container">
            <div className="icon-wrapper">
                <img src={icon} alt="icon" className="stats-widget-icon"/>
            </div>
            <div className="stats-widget-wrapper">
                <h2 className="stats-widget-title">{title}</h2>
                <span className="stats-widget-value">{value}</span>
            </div>
        </div>
    );
}
 
export default StatsWidget;