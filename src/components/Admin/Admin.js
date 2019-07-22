import React, {Component} from 'react';
import AddFruits from "../AddFruits/AddFruits";

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome on the admin page</h1>
                <AddFruits/>
            </React.Fragment>
        );
    }
}

export default Admin;