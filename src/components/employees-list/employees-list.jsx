import EmployeesListItem from "../employees-list-item/employees-list-item";
import EmployeesListTitles from "../employees-list-titles/employees-list-titles";
import ListItemBlank from "../list-item-blank/list-item-blank";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleStatus }) => {
    const employeesItems = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleStatus={(e) => onToggleStatus(id, e.currentTarget.dataset.toggle)} />
        );
    });

    return ( 
        <ul className="app-list list-group">
            <EmployeesListTitles />
            {data.length === 0 ? <ListItemBlank /> : employeesItems}
        </ul>
    );
}
 
export default EmployeesList;