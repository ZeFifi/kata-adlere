import React, {Component} from 'react';

class VegetablesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetables : []
        }
    }

    componentDidMount() {
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
        const {vegetables} = this.state;
        return (
            <React.Fragment>
                <h1>Légumes</h1>
                {vegetables}
            </React.Fragment>
        );
    }
}

export default VegetablesList;