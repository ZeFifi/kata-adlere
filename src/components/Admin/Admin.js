import React, {Component} from 'react';
import AddItems from "../AddFruits/AddItems";
import ProductsList from "../ProductsList/ProductsList";

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="mb-5">Bienvenue sur la page d'administration</h1>
                    <AddItems/>
                    <h2>Products</h2>
                    <ProductsList/>
                </div>

            </React.Fragment>
        );
    }
}

export default Admin;