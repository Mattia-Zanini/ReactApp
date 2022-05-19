import React, { Component } from 'react'

import '../style/login.css'
import usrLogin from '../images/uicons/userLogin.svg';

class Contact extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <h1>User Page</h1 >
                    <div className="row Login">
                        <div className="col-6 offset-3">
                            <img src={usrLogin} className="userlogin-img" alt="..." />
                            <form action="http://localhost:9000/testPOST" method="post">
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