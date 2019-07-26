import React, { Component } from "react";
import axios from "axios";

import "./ProductsList.css";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    let itemsStock = "http://localhost:3001/items";
    axios.get(itemsStock).then(response => {
      let items = response.data.map((item, index) => {
        console.log(response.data);
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.cat}</td>
            <td>{item.price}€</td>
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
                onClick={() => this.handleDeleteFruits(item.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        );
      });
      this.setState({ items });
    });
  }

  handleDeleteFruits = id => {
    const { items } = this.state;

    axios.delete(`http://localhost:3001/items/${id}`).then(response => {
      console.log(response.data);
      this.setState({ items });
    });
    setTimeout(() => {
      document.location.reload();
    }, 1000);
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Description</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Prix</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductsList;
