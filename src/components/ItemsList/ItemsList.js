import React, {Component} from 'react';
import axios from "axios"

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : [],
            quantity: 0,
            product: "",
            price: 0,
            checked: false
        }
    }

    componentDidMount() {
        const {cat} = this.props;
        let itemsStock = `http://localhost:3001/${cat}`;
        axios.get(itemsStock)
            .then(response => {
                const type = response.data;
                this.setState({type});
                })
            .catch(error => console.log(error));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { product, quantity, price} = this.state;
        axios.post(`http://localhost:3001/cart`, {product, quantity, price})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        const {type} = this.state;
        const {title} = this.props;
        return (
            <React.Fragment>
                <div className="container mb-5">
                    <h1>{title}</h1>
                    <div className="row">
                    {type.map((item, index) =>
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card" style={{width: 18 + "rem"}}>
                                <img src={item.image} className="card-img-top" alt={item.name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description} </p>
                                        <p name="price">{item.price}€</p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <select className="form-control" name="quantity" onChange={this.handleChange} >
                                                <option value="default">Choisissez une quantité</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" name="product" type="checkbox" value={item.name} onChange={this.handleChange}/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Default checkbox
                                            </label>
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