import React, { Component } from 'react'
import ItemList from '../components/itemList';

class Blogs extends Component {
    render() {
        return (
            <>
                <div className="App container-fluid">
                    <ItemList />
                </div>
            </>
        )
    }
};

export default Blogs;