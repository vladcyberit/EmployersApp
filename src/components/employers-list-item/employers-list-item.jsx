import { Component } from "react";
import "./employers-list-item.css";

class EmployersListItem extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    setIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }

    setLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const { fullName, salary, onDelete } = this.props;
        const { increase, like } = this.state;
        const isAwarded = `list-group-item d-flex justify-content-between${increase ? " increase" : ""}${like ? " like" : ""}`;

        return (
            <li className={isAwarded}>
                <span className="list-group-item-label"
                    onClick={this.setLike}>{fullName}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-trophy btn-sm"
                        onClick={this.setIncrease}>
                        <i className="fa-solid fa-trophy"></i>
                    </button>

                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}
 
export default EmployersListItem;