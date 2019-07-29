import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import "./ProductsList.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      price: ""
    };

    this.promo = React.createRef();
  }

  componentDidMount() {
    let itemsStock = "http://localhost:3001/items";
    axios.get(itemsStock).then(response => {
      let items = response.data;
      this.setState({ items });
      console.log("items", items)
    });
  }

  notify = () => toast.success("Prix modifié avec succès !");

  handlePromoChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  handleDeleteItems = id => {
    const { items } = this.state;
    axios.delete(`http://localhost:3001/items/${id}`).then(response => {
      console.log(response.data);
      this.setState({ items });
    });
    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  handleUpdateItems = (id, event) => {
    event.preventDefault();
    const {price} = this.state;
    axios.patch(`http://localhost:3001/items/${id}`, {price})
      .then(() =>
        this.notify()
      );
    setTimeout(() => {
      document.location.reload();
    }, 3000)
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <ToastContainer autoClose={3000} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Prix</th>
              <th scope="col">Promo ?</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.cat}</td>
                  <td>{item.price}€</td>
                  <td><input onChange={this.handlePromoChange} name="price" className="promo" type="number" width="15" maxLength="3" /></td>
                  <td>
                    <img
                      className="table-product-image"
                      src={item.image}
                      alt={item.image}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDeleteItems(item.id)}
                    >
                      Supprimer
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-primary"
                      onClick={(event) => this.handleUpdateItems(item.id, event)}
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductsList;
