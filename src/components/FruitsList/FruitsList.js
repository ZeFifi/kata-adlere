import React, {Component} from 'react';
import axios from "axios"

class FruitsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits : []
        }
    }

    componentDidMount() {
        let fruitsStock = "http://localhost:3001/fruits";
        axios.get(fruitsStock)
            .then(response => {
                let fruits = response.data.map((fruit, index) => {
                    return <div key={index}>
                        <h3>{fruit.name}</h3>
                        <img src={fruit.image} alt={fruit.name} />
                        <p>{fruit.description}</p>
                        <p>{fruit.price}</p>
                    </div>
                });
                this.setState({fruits});
            });
    }

    render() {
        const {fruits} = this.state;

        return (
            <React.Fragment>
                <h1>Fruits</h1>
                {fruits}
            </React.Fragment>
        );
    }
}

export default FruitsList;