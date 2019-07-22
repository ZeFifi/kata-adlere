import React, {Component} from 'react';
import axios from "axios";

import "./ProductsList.css";

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetables : [],
            fruits: []
        }
    }

    componentDidMount() {
        let fruitsStock = "http://localhost:3001/fruits";
        axios.get(fruitsStock)
            .then(response => {
                let fruits = response.data.map((fruit, index) => {
                    console.log(response.data);
                    return <tr key={index}>
                            <th scope="row">{fruit.id}</th>
                            <td>{fruit.name}</td>
                            <td>{fruit.description}</td>
                            <td>{fruit.price}</td>
                            <td><img className="table-product-image" src={fruit.image} alt={fruit.image} /></td>
                            <td>
                                <button className="btn btn-primary">Modifier</button>&nbsp;
                                <button className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                });
                this.setState({fruits});
            })

        let vegetablesStock = "http://localhost:3001/vegetables";
        axios.get(vegetablesStock)
            .then(response => {
                let vegetables = response.data.map((vegetable, index) => {
                    console.log(response.data);
                    return <tr key={index}>
                            <th scope="row">{vegetable.id}</th>
                            <td>{vegetable.name}</td>
                            <td>{vegetable.description}</td>
                            <td>{vegetable.price}</td>
                            <td><img className="table-product-image" src={vegetable.image} alt={vegetable.image} /></td>
                            <td>
                                <button className="btn btn-primary">Modifier</button>&nbsp;
                                <button className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                });
                this.setState({vegetables});
            })
    }

    render() {
        const {fruits, vegetables} = this.state;
        return (
            <React.Fragment>
                <h3>Fruits</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fruits}
                    </tbody>
                </table>

                <h3>Légumes</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vegetables}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ProductsList;