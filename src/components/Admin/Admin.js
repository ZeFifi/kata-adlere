import React, {Component} from 'react';
import AddFruits from "../AddFruits/AddFruits";
import axios from "axios";

class Admin extends Component {
    componentDidMount() {
        let vegetablesStock = "http://localhost:3001/vegetables";
        axios.get(vegetablesStock)
            .then(response => {
                let vegetables = response.data.map((vegetable, index) => {
                    console.log(response.data);
                    return <div key={index}>
                        <h3>{vegetable.name}</h3>
                        <img src={vegetable.image} alt={vegetable.name} />
                        <p>{vegetable.description}</p>
                        <p>{vegetable.price}</p>
                    </div>
                });
                this.setState({vegetables});
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome on the admin page</h1>
                <AddFruits/>
                <h2>Products</h2>

            </React.Fragment>
        );
    }
}

export default Admin;