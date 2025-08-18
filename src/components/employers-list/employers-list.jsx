import EmployersListItem from "../employers-list-item/employers-list-item";
import EmployersListTitles from "../employers-list-titles/employers-list-titles";
import ListItemBlank from "../list-item-blank/list-item-blank";

import "./employers-list.css";

const EmployersList = ({ data, onDelete, onToggleStatus }) => {
    const employeesItems = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleStatus={(e) => onToggleStatus(id, e.currentTarget.dataset.toggle)} />
        );
    });

    return ( 
        <ul className="app-list list-group">
            <EmployersListTitles />
            {data.length === 0 ? <ListItemBlank /> : employeesItems}
        </ul>
    );
}
 
export default EmployersList;