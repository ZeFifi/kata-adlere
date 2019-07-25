import React, {Component} from 'react';
import ItemsList from "../ItemsList/ItemsList";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <ItemsList title="Nos bons produits frais"/>
            </React.Fragment>
        );
    }
}

export default Home;