import React, {Component} from 'react';
import axios from "axios";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/cart")
            .then(response => {
                let cart = response.data.map((item, index) => {
                    return <li key={index}>
                        {item.quantity} {item.product}
                    </li>
                })
                this.setState({cart})
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome on your cart</h1>
                <p>Contenu de votre panier :</p>
                <ul>{this.state.cart}</ul>
            </React.Fragment>
        );
    }
}

export default Cart;