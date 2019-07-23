import React, {Component} from 'react';
import axios from "axios"

class FruitsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits : [],
            quantity: 0,
            product: ""
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
                        <p>{fruit.price}€</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantité</label>
                                <select className="form-control" name="quantity" onChange={this.handleChange} >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="product" type="checkbox" value={fruit.name} onChange={this.handleChange}/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                            </div>
                            <button className="btn btn-primary" type="submit">Ajouter au panier</button>
                        </form>
                    </div>
                });
                this.setState({fruits});
            });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { product, quantity } = this.state;

        axios.post(`http://localhost:3001/cart`, {product, quantity})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    };



    render() {
        const {fruits} = this.state;

        return (
            <React.Fragment>
                <h1>Fruits</h1>
                {fruits}
                Quantité ajoutée : {this.state.quantity}
            </React.Fragment>
        );
    }
}

export default FruitsList;