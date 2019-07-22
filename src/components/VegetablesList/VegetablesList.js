import React, {Component} from 'react';
import axios from "axios";

class VegetablesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetables : []
        }
    }

    componentDidMount() {
        let vegetablesStock = "http://localhost:3001/vegetables";
        axios.get(vegetablesStock)
            .then(response => {
                let vegetables = response.data.map((vegetable, index) => {
                    console.log(response.data);
                    return <div key={index}>
                        <h3>{vegetable.name}</h3>
                        <img src={vegetable.image} alt={vegetable.name} />
                        <p>{vegetable.description}</p>
                        <p>{vegetable.price}</p>
                    </div>
                });
                this.setState({vegetables});
            })
    }

    render() {
        const {vegetables} = this.state;
        return (
            <React.Fragment>
                <h1>Légumes</h1>
                {vegetables}
            </React.Fragment>
        );
    }
}

export default VegetablesList;