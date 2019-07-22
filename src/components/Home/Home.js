import React, {Component} from 'react';
import FruitsList from "../FruitsList/FruitsList";
import VegetablesList from "../VegetablesList/VegetablesList";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <FruitsList/>
                <VegetablesList/>
            </React.Fragment>
        );
    }
}

export default Home;