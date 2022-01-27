import React, { Component } from "react";
import axios from "axios";

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));



        this.setState ({
            username: " "
        })
    }










    render() {
        return (
            <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user){
                            return <option
                            key={user}
                            value={user}>{user}
                            </option>
                        })
                    }
                    </select>
                </div>
            </form>
                <p>You are on the Create Exercises component!</p>
            </div>
        ) 
    }
}