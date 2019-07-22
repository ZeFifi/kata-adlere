import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits : [],
            vegetables : []
        }
    }

    componentDidMount() {
        let fruitsStock = "http://localhost:3001/fruits";
        fetch(fruitsStock)
            .then(response => response.json())
            .then(data => {
                let fruits = data.map((fruit, index) => {
                    return <div key={index}>
                        <h3>{fruit.name}</h3>
                        <img src={fruit.image} alt={fruit.name} />
                        <p>{fruit.description}</p>
                        <p>{fruit.price}</p>
                    </div>
                });
                this.setState({fruits : fruits});
            });

        let vegetablesStock = "http://localhost:3001/vegetables";
        fetch(vegetablesStock)
            .then(response => response.json())
            .then(data => {
                let vegetables = data.map((vegetable, index) => {
                    return <div key={index}>
                        <h3>{vegetable.name}</h3>
                        <img src={vegetable.image} alt={vegetable.name} />
                        <p>{vegetable.description}</p>
                        <p>{vegetable.price}</p>
                    </div>
                });
                this.setState({vegetables : vegetables});
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Fruits</h1>
                {this.state.fruits}
                <h1>Légumes</h1>
                {this.state.vegetables}
            </React.Fragment>
        );
    }
}

export default Home;