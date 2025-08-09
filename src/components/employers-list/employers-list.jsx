import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({data, onDelete}) => {
    const employeesItems = data.map(item => {
        const { id, fullName, salary } = item;
        return (
            <EmployersListItem 
                key={id}
                fullName={fullName}
                salary={salary}
                onDelete={() => onDelete(id)}
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