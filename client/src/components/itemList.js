import React, { Component } from 'react'
import Card from './card';

class ItemList extends Component {
    render() {
        return (
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}
export default ItemList;