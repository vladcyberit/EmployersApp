import "./app-filter.css";

const AppFilter = ({ buttonsFilter }) => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-primary"
                type="button"
                data-btnfilter="all"
                onClick={(e) => buttonsFilter(e.currentTarget.dataset.btnfilter)}>
                    All employees
            </button>
            <button 
                className="btn btn-outline-primary"
                type="button"
                data-btnfilter="liked"
                onClick={(e) => buttonsFilter(e.currentTarget.dataset.btnfilter)}>
                    Likely to be promoted
            </button>
            <button 
                className="btn btn-outline-primary"
                type="button"
                data-btnfilter="over"
                onClick={(e) => buttonsFilter(e.currentTarget.dataset.btnfilter)}>
                    Salary over $9,000
            </button>
        </div>
    );
}
 
export default AppFilter;