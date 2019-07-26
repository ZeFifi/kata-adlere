import React, {Component} from 'react';
import axios from "axios";
import uniqueId from "react-html-id";

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            quantity: 0,
            product: "",
            price: 0,
            total: 0
        };
        uniqueId.enableUniqueIds(this);
        this.price = React.createRef();
        this.quantity = React.createRef();
    }

    componentDidMount() {
        let itemsStock = `http://localhost:3001/items`;
        axios.get(itemsStock)
            .then(response => {
                const items = response.data;
                this.setState({items});
                })
            .catch(error => console.log(error));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.price);
        // Total for 1 product
        this.setState({total : this.state.quantity * this.state.price})
    };

    handleQuantity = event => {
        // Converting the quantity string into an int
        const quantity = parseFloat(event.target.value);
        this.setState({quantity : quantity});
    };

    handlePrice = event => {
        // Converting the quantity string into an int
        const price = parseFloat(event.target.innerHTML);
        this.setState({price : price});
    };

    handleSubmit = event => {
        event.preventDefault();
        const { product, quantity, price, total} = this.state;
        axios.post(`http://localhost:3001/cart`, {product, quantity, price, total})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        const {items} = this.state;
        const {title} = this.props;

        return (
            <React.Fragment>
                <div className="container mb-5">
                    <h1>{title}</h1>
                    <div className="row">
                    {items.map((item, index) =>
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" style={{width: 18 + "rem"}}>
                                <img src={item.image} className="card-img-top" alt={item.name}/>
                                <div className="card-body">
                                    {item.cat === "Fruit" ?
                                        <span className="badge badge-primary">Fruit</span>
                                        : <span className="badge badge-success">Légume</span>
                                    }
                                    <h5 className="card-title" name={item.name}>{item.name}</h5>
                                    <p className="card-text">{item.description} </p>
                                        <span ref={this.price} value={item.price} onChange={this.handlePrice}>{item.price}
                                        </span><span>€</span>
                                    <form onSubmit={event => this.handleSubmit(event)}>
                                        <div className="form-group">
                                            <select className="form-control" value={item.quantity} onChange={this.handleQuantity} >
                                                <option ref={this.quantity} value="default">Choisissez une quantité</option>
                                                <option ref={this.quantity} value="1">1</option>
                                                <option ref={this.quantity} value="2">2</option>
                                                <option ref={this.quantity} value="3">3</option>
                                                <option ref={this.quantity} value="4">4</option>
                                                <option ref={this.quantity} value="5">5</option>
                                            </select>
                                        </div>
                                        <div className="form-check">
                                            <input id={this.nextUniqueId()} className="form-check-input" name="product" type="checkbox" value={item.name} onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor={this.lastUniqueId()}>
                                                Sélectionner
                                            </label><br/><br/>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Ajouter au panier</button>
                                    </form>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ItemsList;