import React, { Component } from 'react'
import '../style/card.css';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <img src={this.props.card.immagine} className="card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">{this.props.card.prezzo} €</p>
                        <div className="row justify-content-around">
                            <button className="btn btn-primary btn-compra">Compra</button>
                            <button className="btn btn-primary btn-carrello">Carrello</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;