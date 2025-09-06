import "./list-item-blank.css";

const ListItemBlank = () => {
    return (
        <li className="list-item-blank">
            <span className="title-name-blank">---</span>
            <span className="title-job-blank">---</span>
            <span className="title-salary-blank">---</span>
            <span className="title-status-blank">---</span>
        </li>
    );
}
 
export default ListItemBlank;