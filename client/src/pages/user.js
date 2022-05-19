import React, { Component } from 'react'

import '../style/login.css'
import usrLogin from '../images/uicons/userLogin.svg';

class Contact extends Component {
    // inizializza lo stato di default.
    state = {
        login: "nada"
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ login: res.login }))
            .then(res => console.log(res))
            .catch(err => console.log(err));
        console.log(this.state.login);
    }

    //fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/user');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <h1>User Page</h1 >
                    <h1>Ciao {this.state.login}</h1 >
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
};

export default Contact;