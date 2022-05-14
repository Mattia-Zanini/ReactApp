import React, { Component } from 'react'
import { Link } from "react-router-dom";

import '../style/footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="text-center footer">
                    <div className="row">
                        <div className="col">
                            <p>Book Seller Company</p>
                            <p>Via Paolo Dell'Aguzzo, 56</p>
                            <p>Senigallia, Ancona, Italia</p>
                            <p>info@paolodellaguzzo.com</p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
export default Footer;