import EmployersListItem from "../employers-list-item/employers-list-item";
import EmployersListTitles from "../employers-list-titles/employers-list-titles";
import ListItemBlank from "../list-item-blank/list-item-blank";

import "./employers-list.css";

const EmployersList = ({data, onDelete}) => {
    const employeesItems = data.map(item => {
        const { id, fullName, jobTitle, salary } = item;
        return (
            <EmployersListItem 
                key={id}
                fullName={fullName}
                jobTitle={jobTitle}
                salary={salary}
                onDelete={() => onDelete(id)}
            />
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