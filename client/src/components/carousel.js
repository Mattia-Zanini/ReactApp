import React, { Component } from 'react'

import discount from '../images/slide_discount.png';
import camion from '../images/slide_camion.png';
import vasetto from '../images/slide2.png';
import '../style/carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={discount} class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={camion} class="d-block w-50" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={vasetto} class="d-block w-50" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}
export default Carousel;