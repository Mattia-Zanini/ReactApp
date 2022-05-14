import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from "react-router-dom";

import '../style/parallax.css';
import dolcetto from '../images/gelatina-colorata.png';

class ParallaxSection extends Component {
    render() {
        return (
            <>
                <Parallax pages={2} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={3}
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
                </Parallax>
            </>
        );
    }
}
export default ParallaxSection;