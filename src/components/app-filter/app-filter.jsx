import "./app-filter.css";

const AppFilter = ({ buttonsFilter, filter }) => {
    const buttonsData = [
        {
            id: "all",
            label: "All employees",
        },
        {
            id: "liked",
            label: "Likely to be promoted",
        },
        {
            id: "over",
            label: "Salary over $9,000",
        }
    ];

    const buttons = buttonsData.map(({id, label}) => {
        const selectedBtn = () => {
            return (id === filter) ? "btn-primary" : "btn-outline-primary";
        }
        return (
            <button 
                key={id}
                className={`btn ${selectedBtn()}`}
                type="button"
                onClick={() => buttonsFilter(id)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}
 
export default AppFilter;