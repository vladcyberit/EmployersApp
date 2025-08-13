import EmployersListItem from "../employers-list-item/employers-list-item";
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
            <li className="list-titles">
                <span className="title-name">Name</span>
                <span className="title-job">Job Title</span>
                <span className="title-salary">Salary</span>
                <span className="title-status">Status</span>
            </li>
            {employeesItems}
        </ul>
    );
}
 
export default EmployersList;