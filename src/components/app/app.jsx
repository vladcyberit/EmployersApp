import { Component } from "react";

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
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)};
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployersAddForm />
            </div>
        );
    }
}

export default App;