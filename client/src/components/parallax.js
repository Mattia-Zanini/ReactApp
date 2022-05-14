import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from "react-router-dom";

import '../style/parallax.css';
import dolcetto from '../images/gelatina-colorata.png';
import caramelle from '../images/caramelle.png';

class ParallaxSection extends Component {
    render() {
        return (
            <>
                <Parallax pages={3} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={1}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <p className="parallax-P">Candy Market</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={3} style={{ backgroundColor: '#c79ce2' }} />

                    <ParallaxLayer
                        offset={1}
                        speed={1.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-10">
                                    <p className="parallax-P parallax-new">Scopri i nostri prodotti</p>
                                </div>
                                <div className="col-2">
                                    <img src={dolcetto} className="dolcetto-img" alt="dolcetto" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 offset-4">
                                    <Link to="/shops" className="btn btn-goShop">
                                        Vai allo shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={3} style={{ backgroundColor: '#c79ce2' }} />

                    <ParallaxLayer
                        offset={2}
                        speed={3}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <div className="row">
                            <div className="col-3">
                                <img src={caramelle} className="caramelle-img" alt="dolcetto" />
                            </div>
                            <div className="col-6 offset-3">
                                <div className="row">
                                    <p className="parallax-P parallax-user text-center">Accedi alla pagina <br />e unisciti a noi</p>
                                </div>
                                <div className="row">
                                    <Link to="/user" className="btn btn-goUser">
                                        Accedi
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </>
        );
    }
}
export default ParallaxSection;