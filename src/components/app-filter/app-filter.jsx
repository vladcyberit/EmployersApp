import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-primary"
                type="button">
                    All employees
            </button>
            <button 
                className="btn btn-outline-primary"
                type="button">
                    Promoted employees
            </button>
            <button 
                className="btn btn-outline-primary"
                type="button">
                    Salary over $3,000
            </button>
        </div>
    );
}
 
export default AppFilter;