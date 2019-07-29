import React from "react";
import AddItems from "../AddItems/AddItems";
import ProductsList from "../ProductsList/ProductsList";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="mb-5">Bienvenue sur la page d'administration</h1>
        <AddItems/>
        <h2>Produits mis en ligne</h2>
        <ProductsList/>
      </div>
    </React.Fragment>
  );
};

export default Admin;
