import React from 'react';
import axios from 'axios';

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

        axios.post(`http://localhost:3001/fruits`, { name, description, cat, price, image})
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
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Fruit" value={cat} onChange={this.handleCat}/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Fruit
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Légume" value={cat} onChange={this.handleCat}/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Légume
                            </label>
                    </div>
                    <label>
                        Price:
                        <input type="text" name="price" value={price} onChange={this.handleChange} />
                    </label>
                    <label>
                        Image:
                        <input type="text" name="image" value={image} onChange={this.handleChange} />
                    </label>
                    <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddItems
