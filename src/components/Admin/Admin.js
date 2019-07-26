import React, { Component } from "react";
import AddItems from "../AddItems/AddItems";
import ProductsList from "../ProductsList/ProductsList";

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="mb-5">Bienvenue sur la page d'administration</h1>
          <AddItems />
          <h2>Produits mis en ligne</h2>
          <ProductsList />
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
