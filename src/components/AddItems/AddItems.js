import React from 'react';
import axios from 'axios';
import uniqueId from "react-html-id";

class AddItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            image: '',
            cat: ""
        };
        uniqueId.enableUniqueIds(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCat = event => {
        this.setState({cat : event.target.name})
    };

    handleSubmit = event => {
        event.preventDefault();

        const { name, description, price, image, cat} = this.state;

        axios.post(`http://localhost:3001/items`, { name, description, cat, price, image})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        setTimeout(() => {
            document.location.reload()
        }, 1000)
    };

    render() {
        const { name, description, price, image, cat} = this.state;
        return (
            <div className="card p-3 mb-5">
                <h2 className="mb-5">Ajouter un produit</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row mb-3">
                        <div className="col-md-3">
                            <label>
                                Nom du produit :
                                <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="col-md-3">
                            <label>
                                Description :
                                <input className="form-control" type="text" name="description" value={description} onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md-1">
                            <div className="form-check">
                                <input id={this.nextUniqueId()} className="form-check-input" type="checkbox" name="Fruit" value={cat} onChange={this.handleCat}/>
                                <label className="form-check-label" htmlFor={this.lastUniqueId()}>
                                    Fruit
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1"><div className="form-check">
                            <input id={this.nextUniqueId()} className="form-check-input" type="checkbox" name="Légume" value={cat} onChange={this.handleCat}/>
                            <label className="form-check-label" htmlFor={this.lastUniqueId()}>
                                Légume
                            </label>
                        </div></div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-md-3">
                            <label>
                                Prix unitaire TTC :
                                <input className="form-control" type="text" name="price" value={price} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="col-md-3">
                            <label>
                                URL de l'image :
                                <input className="form-control" type="text" name="image" value={image} onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Ajouter le produit</button>
                </form>
            </div>
        )
    }
}

export default AddItems
