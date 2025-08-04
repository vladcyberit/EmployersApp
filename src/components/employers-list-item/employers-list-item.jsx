import "./employers-list-item.css";

const EmployersListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Vlad Chosenko</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue="1000$"/>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button" 
                    className="btn-trophy btn-sm">
                    <i className="fa-solid fa-trophy"></i>
                </button>

                <button 
                    type="button" 
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}
 
export default EmployersListItem;