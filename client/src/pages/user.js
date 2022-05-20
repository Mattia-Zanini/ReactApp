import React, { Component } from 'react'

import '../style/login.css'
import usrLogin from '../images/uicons/userLogin.svg';

class Contact extends Component {
    // inizializza lo stato di default.
    state = {
        login: "",
        id: ""
    };

    componentDidMount() {
        console.log("componentDidMount");
        if (this.state.id === "") {
            this.callBackendAPI('/randID')
                .then(res => this.setState({ id: res.idGenerated }))
                .catch(err => console.log(err));
        }
        this.callBackendAPI('/user')
            .then(res => this.setState({ login: res.credentialsValid }))
            .catch(err => console.log(err));
    }

    //fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async (page) => {
        const response = await fetch(page);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
    render() {
        if (this.state.login === "false") {
            return (
                <>
                    <div className="App container-fluid">
                        <h1>{this.state.login} ID: {this.state.id}</h1>
                        <div className="row Login">
                            <div className="col-6 offset-3">
                                <img src={usrLogin} className="userlogin-img" alt="..." />
                                <form action="/user" method="post">
                                    <input type="text" className="form-control" id="usernm" name="username" placeholder="Username" />
                                    <input type="password" className="form-control" id="passwd" name="password" placeholder="Password" />
                                    <button type="submit" className="btn btn-primary" id="accedi" >Accedi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="App container-fluid">
                        <h1>{this.state.login} ID: {this.state.id}</h1>
                    </div>
                </>
            )
        }
    }
};

export default Contact;