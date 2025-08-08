import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";
import employees from "../../data/employees";

const EmployersList = () => {
    const employeesItems = employees.map(item => {
        return (
            <EmployersListItem 
                key={item.id}
                fullName={item.fullName} 
                salary={item.salary}
            />
        );
    });

    return ( 
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    );
}
 
export default EmployersList;