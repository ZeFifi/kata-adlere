import React, {Component} from 'react';
import AddFruits from "../AddFruits/AddFruits";
import ProductsList from "../ProductsList/ProductsList";

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="mb-5">Bienvenue sur la page d'administration</h1>
                    <AddFruits/>
                    <h2>Products</h2>
                    <ProductsList/>
                </div>

            </React.Fragment>
        );
    }
}

export default Admin;