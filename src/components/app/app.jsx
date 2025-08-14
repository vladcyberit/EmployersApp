import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


import AppHeader from "../app-header/app-header";
import AppStats from "../app-stats/app-stats";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import EmployersList from "../employers-list/employers-list";
import SearchPanel from "../search-panel/search-panel";
import employees from "../../data/employees";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: employees
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    addItem = (fullName, jobTitle, salary) => {
        const newEmployee = {
            id: uuidv4(),
            fullName: fullName,
            jobTitle: jobTitle,
            salary: salary,
            increase: false
        }
        this.setState(({data}) => ({
            data: [...data, newEmployee]
        }));
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppHeader />
                <AppStats />
                {/* <AppInfo /> */}
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;