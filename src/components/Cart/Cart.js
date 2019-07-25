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
                let cart = response.data;
                this.setState({cart})
                });
    }

    handleDeleteItem = (id) => {
        const {cart} = this.state;

        axios.delete(`http://localhost:3001/cart/${id}`)
            .then(response => {
                console.log(response.data);
                this.setState({ cart })
            });
        setTimeout(() => {
            document.location.reload()
        }, 1000)
    };

    render() {
        const { cart } = this.state;
        return (
            <React.Fragment>
                { cart.length > 0 ?
                    <div className="container">
                    <h1 className="mb-5">Mon panier</h1>
                    <p>Contenu de votre panier :</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Produit</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td></td>
                            <td><button className="btn btn-danger" onClick={() => this.handleDeleteItem(item.id)}>Supprimer</button></td>
                            </tr>}
                        )}
                        </tbody>
                    </table>
                </div>
                : <div className="container">
                        <p className="text-center">Vous n'avez aucun article dans votre panier.</p>
                    </div>}
            </React.Fragment>
        );
    }
}

export default Cart;