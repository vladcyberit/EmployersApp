import { Component } from "react";
import { IoAdd } from "react-icons/io5";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            salary: "",
            jobTitle: "",

            fullNameDirty: false,
            salaryDirty: false,
            jobTitleDirty: false,

            fullNameError: true,
            salaryError: true,
            jobTitleError: true
        };
    }

    formValidation = () => {
        const { fullNameError, salaryError, jobTitleError } = this.state;
        if (fullNameError || salaryError || jobTitleError) {
            return true
        } else {
            return false
        }
    }

    onFullNameChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const textOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
        const value = e.target.value;
        const fullNameLength = value.length < 2;

        if (!value || value.trim() === "" || !textOnlyRegex.test(String(value)) || fullNameLength) {
            this.setState({ fullNameError: true })
        } else {
            this.setState({ fullNameError: false })
        }
    }

    onJobTitleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
        const textOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
        const value = e.target.value;
        const jobTitleLength = value.length < 2;

        if (!value || value.trim() === "" || !textOnlyRegex.test(String(value)) || jobTitleLength) {
            this.setState({ jobTitleError: true })
        } else {
            this.setState({ jobTitleError: false })
        }
    }

    onSalaryChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const value = e.target.value;
        const numberOnlyRegex = /^[0-9.,]+$/;

        if (!value || !numberOnlyRegex.test(value)) {
            this.setState({ salaryError: true })
        } else {
            this.setState({ salaryError: false })
        }
    }

    onBlurHandler = (e) => {
        switch (e.target.name) {
            case "fullName":
                this.setState({ fullNameDirty: true });
                break;
            case "salary":
                this.setState({ salaryDirty: true });
                break;
            case "jobTitle":
                this.setState({ jobTitleDirty: true });
                break;
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (document.activeElement) {
            document.activeElement.blur();
        }

        const { fullName, jobTitle, salary } = this.state;
        const { onAdd } = this.props;

        onAdd(fullName, jobTitle, salary);
        this.setState({
            fullName: "",
            salary: "",
            jobTitle: "",

            fullNameDirty: false,
            salaryDirty: false,
            jobTitleDirty: false,

            fullNameError: true,
            salaryError: true,
            jobTitleError: true
        });
    }

    render() {
        const { fullName, jobTitle, salary } = this.state;
        const { fullNameDirty, jobTitleDirty, salaryDirty } = this.state;
        const { fullNameError, jobTitleError, salaryError } = this.state;

        return ( 
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text" 
                        className={`form-control new-post-label${(fullNameDirty && fullNameError) ? " invalid" : ""}`}
                        placeholder="Name"
                        name="fullName"
                        value={fullName}
                        onChange={this.onFullNameChange}
                        onBlur={this.onBlurHandler}/>
                    <input type="text" 
                        className={`form-control new-post-label${(jobTitleDirty && jobTitleError) ? " invalid" : ""}`}
                        placeholder="Job Title"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={this.onJobTitleChange}
                        onBlur={this.onBlurHandler}/>
                    <input type="text" 
                        className={`form-control new-post-label${(salaryDirty && salaryError) ? " invalid" : ""}`}
                        placeholder="Salary"
                        name="salary"
                        value={salary}
                        onChange={this.onSalaryChange}
                        onBlur={this.onBlurHandler}/>

                    <button type="submit"
                        className="btn btn-primary"
                        disabled={this.formValidation()}><IoAdd className="add"/>Add</button>
                </form>
            </div>
        );
    }
}
 
export default EmployeesAddForm;