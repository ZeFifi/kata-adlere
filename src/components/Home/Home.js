import React, {Component} from 'react';
import ItemsList from "../ItemsList/ItemsList";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <ItemsList title="Fruits" cat="fruits" item="fruit"/>
                <ItemsList title="Légumes" cat="vegetables" item="vegetable"/>
            </React.Fragment>
        );
    }
}

export default Home;