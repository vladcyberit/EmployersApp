import { Component } from "react";
import "./employers-add-form.css";
import { IoAdd } from "react-icons/io5";


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            jobTitle: ""
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { name, jobTitle, salary } = this.state;

        return ( 
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex">
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={name}
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
                        className="btn btn-primary"><IoAdd className="add-icon"/>Add</button>
                </form>
            </div>
        );
    }
}
 
export default EmployersAddForm;