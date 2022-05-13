import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import '../style/parallax.css';

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
                        <p className="parallax-P">Scopri i nostri prodotti</p>
                    </ParallaxLayer>
                </Parallax>
            </>
        );
    }
}
export default ParallaxSection;