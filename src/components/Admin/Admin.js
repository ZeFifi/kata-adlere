import React, {Component} from 'react';
import AddFruits from "../AddFruits/AddFruits";
import ProductsList from "../ProductsList/ProductsList";

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome on the admin page</h1>
                <AddFruits/>
                <h2>Products</h2>
                <ProductsList/>

            </React.Fragment>
        );
    }
}

export default Admin;