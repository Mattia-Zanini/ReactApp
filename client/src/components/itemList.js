import React, { Component } from 'react'
import Card from './card';

import cocacole from '../images/coca_cole.png';
import angurie from '../images/angurie.png';
import more from '../images/more.png';
import orsetti from '../images/orsetti.png';
import ciliegie from '../images/ciliegie.png';
import banane from '../images/banane.png';
import coccodrilli from '../images/coccodrilli.png';
import delfini from '../images/delfini.png';
import pesche from '../images/pesche.png';
import rane from '../images/rane.png';
import rotelle from '../images/rotelle.png';
import fragole from '../images/fragole.png';

class ItemList extends Component {
    state = {
        cards: [
            { id: 0, nome: "Coca Cola", prezzo: 1.52, immagine: cocacole },
            { id: 1, nome: "Angurie", prezzo: 0.99, immagine: angurie },
            { id: 2, nome: "More", prezzo: 1.27, immagine: more },
            { id: 3, nome: "Orsetti", prezzo: 1.83, immagine: orsetti },
            { id: 4, nome: "Ciliegie", prezzo: 1.22, immagine: ciliegie },
            { id: 5, nome: "Banane", prezzo: 1.39, immagine: banane },
            { id: 6, nome: "Coccodrilli", prezzo: 0.47, immagine: coccodrilli },
            { id: 7, nome: "Delfini", prezzo: 2.03, immagine: delfini },
            { id: 8, nome: "Pesche", prezzo: 1.91, immagine: pesche },
            { id: 9, nome: "Rane", prezzo: 0.84, immagine: rane },
            { id: 10, nome: "Rotelle", prezzo: 0.96, immagine: rotelle },
            { id: 11, nome: "Fragole", prezzo: 1.74, immagine: fragole },
        ],
    }
    render() {
        return (
            <div className="row">
                {this.state.cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}
            </div>
        );
    }
}
export default ItemList;