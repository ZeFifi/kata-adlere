import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Cart from "./components/Cart/Cart";

import 'bootstrap/dist/css/bootstrap.css';
import 'shards-ui/dist/css/shards.min.css';

function App() {
  return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/cart" component={Cart} />
      </Router>
  );
}

export default App;
