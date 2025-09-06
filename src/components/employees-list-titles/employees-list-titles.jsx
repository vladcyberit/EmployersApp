import "./employees-list-titles.css";

const EmployeesListTitles = () => {
    return (
        <li className="list-titles">
            <span className="title-name">Name</span>
            <span className="title-job">Job Title</span>
            <span className="title-salary">Salary</span>
            <span className="title-status">Status</span>
        </li>
    );
}
 
export default EmployeesListTitles;