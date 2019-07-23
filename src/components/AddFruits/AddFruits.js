import React from 'react';
import axios from 'axios';

class AddFruits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            image: '',
        };

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { name, description, price, image} = this.state;

        axios.post(`http://localhost:3001/cart`, { name, description, price, image})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        setTimeout(() => {
            document.location.reload()
        }, 1000)
    };

    render() {
        const { name, description, price, image} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Fruit name:
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={description} onChange={this.handleChange} />
                    </label>
                    <label>
                        Price:
                        <input type="text" name="price" value={price} onChange={this.handleChange} />
                    </label>
                    <label>
                        Image:
                        <input type="text" name="image" value={image} onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddFruits
