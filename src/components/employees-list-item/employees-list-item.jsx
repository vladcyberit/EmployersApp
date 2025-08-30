import "./employees-list-item.css";

const EmployeesListItem = ({ fullName, jobTitle, salary, onDelete, onToggleStatus, increase, like }) => {
    const isAwarded = `list-group-item d-flex justify-content-between${increase ? " increase" : ""}${like ? " like" : ""}`;

    return (
        <li className={isAwarded}>
            <button
                aria-label={`Set a status to employee: ${fullName} "likely to be promoted"`}
                type="button"
                className="list-group-item-label btn-name"
                onClick={onToggleStatus}
                data-toggle="like">{fullName}</button>
            <span 
                aria-label={`Job Title of an employee: ${jobTitle}`}
                tabIndex={0}
                className="list-group-item-label">{jobTitle}</span>
            <input 
                aria-label={`Salary ${salary + "$"}`}
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    aria-label={`Reward an employee: ${fullName}`}
                    type="button" 
                    className="btn-trophy btn-sm btn-status"
                    onClick={onToggleStatus}
                    data-toggle="increase">
                    <i className="fa-solid fa-trophy"></i>
                </button>

                <button 
                    aria-label={`Delete an employee: ${fullName}`}
                    type="button" 
                    className="btn-trash btn-sm btn-status"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}
 
export default EmployeesListItem;