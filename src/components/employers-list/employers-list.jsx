import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({data}) => {
    const employeesItems = data.map(item => {
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