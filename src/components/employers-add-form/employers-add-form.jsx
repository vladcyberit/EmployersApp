import { Component } from "react";
import "./employers-add-form.css";
import { IoAdd } from "react-icons/io5";


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            salary: "",
            jobTitle: ""
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullName, jobTitle, salary } = this.state;

        this.props.onAdd(fullName, jobTitle, salary);
        this.setState({
            fullName:"",
            salary: "",
            jobTitle:""
        });
    }

    render() {
        const { fullName, jobTitle, salary } = this.state;

        return ( 
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="fullName"
                        value={fullName}
                        onChange={this.onValueChange}/>
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Job Title"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={this.onValueChange}/>
                    <input type="number" 
                        className="form-control new-post-label"
                        placeholder="Salary"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                        className="btn btn-primary"><IoAdd className="add"/>Add</button>
                </form>
            </div>
        );
    }
}
 
export default EmployersAddForm;